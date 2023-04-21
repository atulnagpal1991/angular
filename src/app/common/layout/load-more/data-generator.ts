const names = ['Daryl', 'Sweeney', 'Guy', 'Wooten', 'Buffy', 'Weber', 'Hyacinth', 'Hood', 'Akeem', 'Carr', 'Rinah', 'Simon', 'Gage', 'Daniels', 'Constance', 'Vazquez', 'Darrel', 'Solis', 'Brian', 'Yang', 'Lillian', 'Bradshaw', 'Christian', 'Palmer', 'Summer', 'Mosley', 'Barry', 'Ayers', 'Keiko', 'Espinoza', 'Candace', 'Pickett', 'Mia', 'Caldwell', 'Thomas', 'Terry', 'Ruth', 'Downs', 'Yasir', 'Wilder', 'Flavia', 'Short', 'Aaron', 'Roach', 'Eric', 'Russell', 'Cheyenne', 'Olson', 'Shaine', 'Avila', 'Chantale', 'Long', 'Dane', 'Cruz', 'Regan', 'Patterson', 'Drew', 'Mckay', 'Bevis', 'Miller', 'Bruce', 'Mccarty', 'Ocean', 'Blair', 'Guinevere', 'Osborn', 'Olga', 'Strong', 'Robert', 'Orr', 'Odette', 'Sears', 'Zelda', 'Medina', 'Priscilla', 'Frank', 'Ursula', 'Holmes', 'Melvin', 'Carrillo', 'Martha', 'Chavez', 'Oren', 'Fox', 'Amos', 'Barr'];
let id = 0;

const generateItem = (): any => {
    return {
        id: ++id,
        text: `${names[Math.floor(Math.random() * names.length)]} ${names[Math.floor(Math.random() * names.length)]}`
    };
};

export const generateHierarchicalData = (nodesPerLevel: number, levels: number): any[] => {
    if (levels === 0) {
        return [];
    }

    return new Array(nodesPerLevel)
        .fill(null)
        .map(() => {
            const node = generateItem();

            const childNodes = generateHierarchicalData(nodesPerLevel, levels - 1);
            if (childNodes != null) {
                node.items = childNodes;
            }

            return node;
        });
};