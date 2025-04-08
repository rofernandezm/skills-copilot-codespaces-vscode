function skillsMember() {
    return {
        name: 'Member',
        description: 'Member of the team',
        type: 'object',
        properties: {
            name: {
                type: 'string',
                description: 'Name of the member',
            },
            role: {
                type: 'string',
                description: 'Role of the member in the team',
            },
            skills: {
                type: 'array',
                items: {
                    type: 'string',
                    description: 'Skills of the member'
                }
            }
        },
        required: ['name', 'role'],
        additionalProperties: false,
    };
}