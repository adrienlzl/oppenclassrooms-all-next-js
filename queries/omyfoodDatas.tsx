export type List = {
    name: string;
    href: string;
    image: string;
    place: string;
    new: boolean;
    alt: string;
    starter: {
        name: string;
        title: string;
        price: string;
    }[];
    main: {
        name: string;
        title: string;
        price: string;
    }[];
    desert: {
        name: string;
        title: string;
        price: string;
    }[];
}

export function useGetAllRestaurants(): List[] {
    return [

        {
            name: 'La palette du goût',
            place: 'Ménilmontan',
            href: '/ohmyfood',
            image: '/images/projet1.jpg',
            alt: 'photo restaurant Charonne',
            new: true,
            starter: [
                { name: 'Fricassée d\'escargot', title: 'Au piment d\'Espelette', price: '25€' },
                { name: 'Foie gras de canard mi-cuit', title: 'Et ses copeaux de truffe noire', price: '35€' },
                { name: 'Oeuf au plat', title: 'Assaisonné à la truffe sur lit de caviar', price: '20€' }
            ],
            main: [
                { name: 'Filet de boeuf aux herbes', title: 'Accompagné de sa ribambelle de légumes', price: '40€' },
                { name: 'Parmentier de queue de boeuf', title: 'À la truffe noire sur sa purée de panais', price: '35€' },
                { name: 'Filet de turbot', title: 'Aux agrumes', price: '44€' }
            ],
            desert: [
                { name: 'Paris-Brest', title: 'Revisité', price: '18€' },
                { name: 'Macaron au chocolat d\'exception', title: 'Et glace à la vanille de Madagascar', price: '22€' },
                { name: 'Mousse au chocolat', title: 'Au piment d\'Espelette et à la truffe noire', price: '23€' }
            ]
        },
        {
            name: 'La note enchantée',
            place: 'Charonne',
            href: '/ohmyfood',
            image: '/images/projet1.jpg',
            alt: 'photo restaurant la note enchantée',
            new: true,
            starter: [
                { name: 'Ravioles de foie gras ', title: 'Accompagnés de leur crème à la truffe', price: '25€' },
                { name: 'Caviar osciètre ', title: 'Sur blini à la farine de blé noir', price: '35€' },
                { name: 'Homard et espuma de potiron', title: 'Mariné aux zestes d\'orange', price: '20€' },
                { name: '', title: '', price: '' }
            ],
            main: [
                { name: 'Noix de coquilles Saint-Jacques', title: 'Sur lit de purée de céleri-rave', price: '40€' },
                { name: 'Langoustine poêlée', title: 'Purée de patate douce', price: '35€' },
                { name: 'Mijoté de queue de boeuf ', title: 'Et riz sauvage aux zestes de citron', price: '44€' }
            ],
            desert: [
                { name: 'Macaron noisette et chocolat', title: 'Glace au caramel brun et sel de Guérande', price: '18€' },
                { name: 'Baba au rhum revisité ', title: 'Avec son coulis de citron', price: '22€' },
                { name: 'Tarte au citron meringuée ', title: 'Déstructurée', price: '23€' }
            ]
        },
        {
            name: 'A la française',
            place: 'Cité Rouge',
            href: '/ohmyfood',
            image: '/images/projet1.jpg',
            alt: 'photo restaurant à la française',
            new: false,
            starter: [
                { name: 'Tartare de poulpe acidulé', title: 'Aux zestes d\'orange', price: '25€' },
                { name: 'Velouté de légumes d\'antan', title: 'Carotte, panais, topinambour', price: '35€' },
                { name: 'Soupe à l\'oignon', title: 'Revisitée', price: '20€' }
            ],
            main: [
                { name: 'Coquilles Saint-Jacques', title: 'Accompagnées d\'une purée de panais', price: '40€' },
                { name: 'Magret de canard', title: 'Et parmentier de pommes de terre', price: '35€' },
                { name: 'Pigeonneau d’Ille-et-Vilaine', title: 'Sur son lit de gnocchis aux légumes', price: '44€' }
            ],
            desert: [
                { name: 'Pétales de violettes glacés', title: 'Et purée de noisettes', price: '18€' },
                { name: 'Fondant au chocolat', title: 'Revisitée', price: '22€' },
                { name: 'Millefeuille croustillant', title: 'Myrtilles et pâte d’amande', price: '23€' }
            ]
        },
        {
            name: 'Le délice des sens',
            place: 'Le délice des sens Rouge',
            href: '/ohmyfood',
            image: '/images/projet1.jpg',
            alt: 'photo restaurant le délice des sens',
            new: false,
            starter: [
                { name: 'Tartare de thon', title: 'Assaisonné au yuzu', price: '25€' },
                { name: 'Bouchée de homard croustillant', title: 'Et sa farandole de petits légumes', price: '35€' },
                { name: 'Velouté de cèpes', title: 'Aux truffes', price: '20€' }
            ],
            main: [
                { name: 'Poulet rôti aux herbes de Provence', title: 'Et sa crème de truffe', price: '40€' },
                { name: 'Langouste rôtie ', title: 'Et ses légumes de saison', price: '35€' },
                { name: 'Côte de boeuf Angus', title: 'Et sa purée de panais', price: '44€' }
            ],
            desert: [
                { name: 'Farandole de desserts', title: 'Du chef', price: '18€' },
                { name: 'Crème brulée ', title: 'Revisitée', price: '22€' },
                { name: 'Tiramisu', title: 'À la noisette', price: '23€' }
            ]
        },
    ]

}

