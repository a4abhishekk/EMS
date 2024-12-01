const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          title: "Complete project report",
          description: "Compile the project report and submit it by end of the week.",
          date: "2024-04-12",
          category: "Work",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Attend team meeting",
          description: "Participate in the quarterly team meeting.",
          date: "2024-04-15",
          category: "Meeting",
          active: true,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Update website content",
          description: "Revise the homepage content and add new sections.",
          date: "2024-04-20",
          category: "Work",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          title: "Prepare presentation",
          description: "Create slides for the upcoming client presentation.",
          date: "2024-04-10",
          category: "Work",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Client follow-up",
          description: "Follow up with clients regarding the new project proposal.",
          date: "2024-04-13",
          category: "Communication",
          active: true,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Organize files",
          description: "Sort and organize all project files.",
          date: "2024-04-18",
          category: "Work",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Team outing",
          description: "Plan and organize a team outing.",
          date: "2024-04-25",
          category: "Event",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          title: "Code review",
          description: "Review the code submitted by the junior developer.",
          date: "2024-04-05",
          category: "Work",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Update documentation",
          description: "Update the project documentation to reflect recent changes.",
          date: "2024-04-08",
          category: "Work",
          active: true,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Write blog post",
          description: "Write a blog post about the latest project developments.",
          date: "2024-04-14",
          category: "Work",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Create survey",
          description: "Create a survey to gather client feedback.",
          date: "2024-04-21",
          category: "Communication",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Prepare budget report",
          description: "Prepare the budget report for the next quarter.",
          date: "2024-04-28",
          category: "Work",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          title: "Develop new feature",
          description: "Implement the new feature as discussed in the meeting.",
          date: "2024-04-02",
          category: "Development",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Test application",
          description: "Conduct testing of the application and report bugs.",
          date: "2024-04-09",
          category: "QA",
          active: true,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Design mockup",
          description: "Design mockups for the new project.",
          date: "2024-04-17",
          category: "Design",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Deploy updates",
          description: "Deploy the latest updates to the production server.",
          date: "2024-04-23",
          category: "Deployment",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Write test cases",
          description: "Write test cases for the new feature.",
          date: "2024-04-30",
          category: "QA",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          title: "Social media update",
          description: "Update the company's social media pages with new content.",
          date: "2024-04-04",
          category: "Marketing",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Email campaign",
          description: "Launch the new email marketing campaign.",
          date: "2024-04-11",
          category: "Marketing",
          active: true,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Prepare newsletter",
          description: "Prepare the monthly newsletter for clients.",
          date: "2024-04-16",
          category: "Marketing",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Create video content",
          description: "Create video content for the upcoming product launch.",
          date: "2024-04-22",
          category: "Marketing",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Analyze metrics",
          description: "Analyze the performance metrics of the latest campaign.",
          date: "2024-04-27",
          category: "Analytics",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123",
      tasks: [
        {
          title: "Review team performance",
          description: "Evaluate the performance of the team over the past quarter.",
          date: "2024-04-05",
          category: "Management",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Strategic planning",
          description: "Plan the strategic goals for the next fiscal year.",
          date: "2024-04-12",
          category: "Management",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Budget approval",
          description: "Approve the budget for the upcoming projects.",
          date: "2024-04-20",
          category: "Finance",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    }
  ];

  
  export const setLocalStorage =() =>{
    localStorage.setItem('employees',JSON.stringify(employees) )
    localStorage.setItem('admin',JSON.stringify(admin) )
  }


  export const getLocalStorage =() =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    console.log(employees,admin)
  }