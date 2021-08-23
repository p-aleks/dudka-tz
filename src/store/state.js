const sessionStoragePackages = JSON.parse(sessionStorage.getItem('packages'));
const packages = sessionStoragePackages || [
    {
        id: '143214',
        client: 'Sam Harris',
        pickupAddress: '3085 Frami Meadows3085 Frami Meadows',
        dropoffAddress: '644 Buster Ford',
        courier: 'Andre Armstrong',
    },
    {
        id: '2513254',
        client: 'Sam Smith',
        pickupAddress: '3085 Frami Meadows',
        dropoffAddress: '644 Buster Ford',
        courier: 'Andre Armstrong',
    },
    {
        id: '315231',
        client: 'Sam Harrii',
        pickupAddress: '3085 Frami Meadows',
        dropoffAddress: '644 Buster Ford',
        courier: 'Andre Armstrong',
    },
];

export const defaultState = {
    packages,
    isAddFormOpen: false,
    addFormData: {
        id: '',
        client: '',
        pickupAddress: '',
        dropoffAddress: '',
        courier: ''
    },
    query: '',
};