export type List = {
    name: string;
    href: string;
    description: string;
    image: string;
}

export function useGetAllProjectsList(): List[] {
    return [

        {
            name: 'Ohmyfood',
            href: '/ohmyfood',
            description: 'Description du projet 1',
            image: '/images/projet1.jpg'
        },
    ]

}