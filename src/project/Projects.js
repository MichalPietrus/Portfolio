import SchedulyfyMockup from './schedulyfy_mockup.png'
import ExpenseManagerMockup from './expense_mockup.png'
import StudentRecordMockup from './student_record_mockup.png'
import KanbanifyMockup from './kanbanify_mockup.png'
import Project from "./Project";
import React from "react";

export default function PrintProjects(props) {

    let schedulyfyDescription = "Schedulyfy is a web application in which you can plan your day or projects. " +
        "Project back-end was built using mostly java and spring while the front-end was made in javascript + jquery" +
        " and some other smaller libraries. That was my first project which i built using javascript and jquery. " +
        "While doing this project i was mostly focused on consolidating my skills of front-end. It was my third big project" +
        "\n\nLogin : admin" +
        "\nPassword : admin";

    let expenseManagerDescription = "Expense Manager is a web application in which you can plan your expenses. " +
        "You can add incomes, outcomes and also create new categories to which you can \n" +
        "allocate types of expenses. While doing this project i mostly focused on understanding the grid system, " +
        "bootstrap and css also learned a lot about spring data and learned a little about javascript";

    let studentRecordDescription = "Student Record was my first project. While doing this project i mostly " +
        "wanted to focus on understanding the basics of web-development. I learned the basics of html and css also " +
        "i got to know spring data, spring boot, spring mvc and spring security.";

    let kanbanifyDescription = "Kanbanify is my fourth project. It is an application similar to trello," +
        "its main goal is to organize tasks using the kanban method. It's not finished yet, i'm currently working on that project" +
        " .Its my first big project where i use React + typescript ";

    let schedulyfyTechnologies = ["Java", "Spring", "Hibernate", "PostgreSQL", "Javascript", "HTML", "CSS", "Jquery",
        "Bootstrap", "Ajax", "Maven", "Heroku", "CalendarIO", "JqueryUI", "Thymeleaf"]

    let expenseManagerTechnologies = ["Java", "Spring", "Hibernate", "PostgreSQL", "HTML", "CSS",
        "Bootstrap", "Maven", "Heroku", "Thymeleaf"]

    let studentRecordTechnologies = ["Java", "Spring", "Hibernate", "PostgreSQL", "HTML", "CSS",
        "Bootstrap", "Maven", "Heroku", "Thymeleaf"]

    let kanbanifyTechnologies = ["Java", "Spring", "Hibernate", "PostgreSQL", "Javascript", "HTML", "CSS",
        "Bootstrap", "Ajax", "Maven", "Heroku", "React", "Typescript", "SASS"]

    return (
        <div id="projects">
            <Project photo={SchedulyfyMockup}
                     projectTitle="Schedulyfy"
                     description={schedulyfyDescription}
                     technologies={schedulyfyTechnologies}
                     windowWidth={props.windowWidth}
                     githubLink="https://github.com/MichalPietrus/Scheduly"
                     siteLink="https://schedulyfy2.herokuapp.com/"/>
            <Project photo={KanbanifyMockup}
                     projectTitle="Kanbanify"
                     description={kanbanifyDescription}
                     technologies={kanbanifyTechnologies}
                     windowWidth={props.windowWidth}
                     githubLink=""
                     siteLink=""/>
            <Project photo={ExpenseManagerMockup}
                     projectTitle="Expense Manager"
                     description={expenseManagerDescription}
                     technologies={expenseManagerTechnologies}
                     windowWidth={props.windowWidth}
                     githubLink="https://github.com/MichalPietrus/Home-Expense-Manager"
                     siteLink="https://electronic-student-record.herokuapp.com/"/>

            <Project photo={StudentRecordMockup}
                     projectTitle="Student Record"
                     description={studentRecordDescription}
                     technologies={studentRecordTechnologies}
                     windowWidth={props.windowWidth}
                     githubLink="https://github.com/MichalPietrus/Student-Record"
                     siteLink="https://github.com/MichalPietrus/Scheduly"/>
        </div>

    )

}