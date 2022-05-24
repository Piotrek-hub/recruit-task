import { useRouter } from 'next/router';

import { ThemeIcon, Text, UnstyledButton, Group } from '@mantine/core';

interface NavbarOptionProps {
	icon: React.ReactNode;
	color: string;
	label: string;
	link: string;
}

function NavbarOption({ icon, color, label, link }: NavbarOptionProps) {
	const router = useRouter();

	return (
		<UnstyledButton
			onClick={() => {
				router.push(link);
			}}
			sx={(theme) => ({
				display: 'block',
				width: '100%',
				padding: theme.spacing.xs,
				borderRadius: theme.radius.sm,
				color:
					theme.colorScheme === 'dark'
						? theme.colors.dark[0]
						: theme.black,

				'&:hover': {
					backgroundColor:
						theme.colorScheme === 'dark'
							? theme.colors.dark[6]
							: theme.colors.gray[0],
				},
			})}
		>
			<Group>
				<ThemeIcon color={color} variant="light">
					{icon}
				</ThemeIcon>

				<Text size="sm">{label}</Text>
			</Group>
		</UnstyledButton>
	);
}

export default NavbarOption;
