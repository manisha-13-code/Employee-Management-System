const employees = [
    {
        "firstname": "Rohan",
        "id": 1,
        "email": "rohan.sharma@example.in",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 2,
            "completed": 1,
            "Failed": 0
        },
        "tasks": [
        {
            "active": true,
            "newTask": true,
            "completed": true,
            "failed": false,
            "taskTitle": "Update website",
            "taskDescription": "Develop the homepage design",
            "taskDate": "2024-30-12",
            "category": "Design"   
        }, 
        {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": true,
            "taskTitle": "Develop website",
            "taskDescription": "Develop a website design",
            "taskDate": "2024-04-12",
            "category": "Dev"
        },
        {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "fix Bugs",
            "taskDescription": "Fix Bugs reported in issue tracker",
            "taskDate": "2024-30-12",
            "category": "Fixing Bugs"
        }
        ]
    },
    {
      "firstname": "Priya",
        "id": 2,
        "email": "priya.verma@example.in",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "Failed": 0
        },
        "tasks": [
        {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Database optimization",
            "taskDescription": "Optimize Queries for better experience",
            "taskDate": "2024-10-11",
            "category": "Database"   
        }, 
        {
            "active": false,
            "newTask": true,
            "completed": true,
            "failed": true,
            "taskTitle": "Design new feature",
            "taskDescription": "Develop design for new features",
            "taskDate": "2024-04-12",
            "category": "Design"
        }
        ]  
    },
    {
        "firstname": "Amit",
        "id": 3,
        "email": "amit.verma@example.in",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "Failed": 0
        },
        "tasks": [
        {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Prepare presentation",
            "taskDescription": "Prepare slides for upcoming client presentation",
            "taskDate": "2024-10-11",
            "category": "Presentation"   
        }, 
        {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Code Review",
            "taskDescription": "Review the codebase for optimization",
            "taskDate": "2024-10-12",
            "category": "Review"
        }
        ]

    }, 
    {
        "firstname": "kajal",
        "id": 4,
        "email": "kajal.singh@example.in",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 0,
            "Failed": 0
        },
        "tasks": [
        {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Write Documentation",
            "taskDescription": "Update the project documentation",
            "taskDate": "2024-10-13",
            "category": "Documentation"   
        }, 
        {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Set up CI/CD",
            "taskDescription": "Implement continous integartion pipelines",
            "taskDate": "2024-10-11",
            "category": "DevOps"
        }
        ]
    }
]

const admin = [{
    "firstname": "admin",
    "id": 1,
    "email": "admin@me.com",
    "password": "123"
}]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    // console.log(employees, admin)
    return {employees, admin}
}