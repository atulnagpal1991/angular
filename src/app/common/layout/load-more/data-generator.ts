const names = ['Olive ', 'Aida ', 'Maureen', 'William', 'Allie', 'James', 'Daniel', 'David', 'Oliver', 'Alexander', 'Noah', 'Simon', 'Gage', 'Daniels', 'Benjamin', 'Thomas', 'Gabriel', 'Solis', 'Liam', 'Yang', 'Henry', 'Jack', 'Michael', 'Palmer', 'Summer', 'Mosley', 'Barry', 'Olivia', 'Keiko', 'Espinoza', 'Candace', 'Pickett', 'Mia', 'Caldwell', 'Thomas', 'Terry', 'Ruth', 'Joseph', 'Yasir', 'Wilder', 'Flavia', 'Anthony', 'Emma', 'Roach', 'Eric', 'Russell', 'Cheyenne', 'Olson', 'Shaine', 'Avila', 'Chantale', 'Long', 'Dane', 'Cruz', 'Regan', 'Patterson', 'Drew', 'Leo', 'Bevis', 'Miller', 'Bruce', 'Mccarty', 'Ocean', 'Blair', 'Guinevere', 'Osborn', 'Olga', 'Strong', 'Robert', 'Orr', 'Odette', 'Sears', 'Zelda', 'Medina', 'Priscilla', 'Frank', 'Ursula', 'Holmes', 'Melvin', 'Carrillo', 'Mason', 'Chavez', 'Oren', 'Fox', 'Amos', 'Barr'];
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