function changeContent(page) {
    // Set the current page
    document.getElementById('current-page').innerHTML = page.charAt(0).toUpperCase() + page.slice(1);

    // Remove active class from all tabs
    document.querySelectorAll('#tabs .tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Add active class to the clicked tab
    event.target.classList.add('active');

    // Change the content
    const content = document.getElementById('content');
    content.innerHTML = `<h1>${page.charAt(0).toUpperCase() + page.slice(1)}</h1><p>Content for ${page}.</p>`;
}

function changeView(view) {
    // You can add logic here to show different content based on the view
    // For example, load different sidebar content, or show/hide elements
    console.log(view); // Placeholder action
}

function changeTabContent(tabName) {
    // Update active class on tabs
    const tabs = document.querySelectorAll('#top-bar .tab');
    tabs.forEach(tab => {
        if (tab.textContent.toLowerCase() === tabName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Change the main content area
    const contentArea = document.getElementById('main-content');
    contentArea.innerHTML = '<h1>' + tabName.charAt(0).toUpperCase() + tabName.slice(1) + '</h1><p>Content for ' + tabName + '.</p>';

    // Update file path
    const dynamicPath = document.getElementById('dynamic-path');
    dynamicPath.textContent = tabName.charAt(0).toUpperCase() + tabName.slice(1);

    if (tabName.toLowerCase() === 'about') {
        contentArea.innerHTML = `
        <div id="about-section" class="code-block">
        <p class="comment"># About Me</p>
        <p class="method-def"><span class="keyword">class</span> AboutAndrewGao:</p>
        <p class="attribute">self.intro = <span class="string">Welcome! I'm Andrew Gao, a 3rd Year B.S./M.S. Computer Science Student at the Georgia Institute of Technology!
        My undergraduate threads are Intelligence and Media, and my Masters specialization will be in Human-Computer Interaction.
        I have held previous internship positions in Cloud Automation and Software Engineering, where I developed a wide range
        of technical and professional skills. With an expected graduation date of Spring 2025 with my Masters, I am looking for my
        final summer internship, with a specific interest toward Software Engineering or Artificial Intelligence positions.
        </p>
        <p class="attribute">self.extracurriculars = <span class="string">'GT Barbell, GT AASA'</span></p>
        <p class="attribute">self.favorite_activities = <span class="string">'Powerlifting, Golf, Baseball'</span></p>
        <p class="attribute">self.hobbies = <span class="string">'Reading and Watching Fantasy Books and Movies'</span></p>
        <p class="attribute">self.coursework = <span class="string">'Intro to Object Oriented Programming, Data Structures and Algorithms, 
        Design and Analysis - Algorithms, Computer Organization and Programming, Intro to Artificial Intelligence, Intro to Robotics and 
        Perception, Computer Graphics, Machine Learning, Computer Audio, Data Visualization, Automata and Complexity, Advanced 
        Privacy Topics, Deep Learning'</span></p>
        <p class="attribute">self.tech_skills = <span class="string">'Java, Python, C#, JavaScript, Git, Unity, Terraform, PowerShell, .NET, MudBlazor, Azure, REST API, gRPC API, NATS, Docker, PostgreSQL, Apache Spark, Apache Kafka, Apache Camel'</span></p>
        <p class="attribute">self.soft_skills = <span class="string">'Communication, Leadership, Adaptability, Teamwork, Problem-Solving'</span></p>
        <p class="attribute">self.portrait = <span class="string"><img src="andrewgao.jpg" alt="Andrew Gao" class="portrait"/></span></p>
        <p class="method-def">def thank_you(self):</p>
        <p class="attribute">return <span class="string">'Thank you for visiting my site and feel free to explore!'</span></p>
    </div>
        `;
    } else if (tabName.toLowerCase() === 'experience') {
        contentArea.innerHTML = `
        <div id="experience-section" class="code-block">
        <p class="comment"># Work Experience</p>
    
        <p><span class="keyword">class</span> SoftwareEngineeringIntern_KLACorporation:</p>
        <p class="string">"""</p>
        <p class="date-comment"># May 2023 - Aug 2023</p>
        <p class="attribute">self.base_project = <span class="string">'Recreated current batch job infrastructure using a Docker Compose framework, leveraging NATS messaging, PostgreSQL databases, gRPC APIs, and a json job scheduler.'</span></p>
        <p class="attribute">self.research = <span class="string">'Researched, identified, and compared suitable data streaming technologies to allow real-time insight generation, letting KLA engineers predict and respond to issues, saving KLA and its customers money and time.'</span></p>
        <p class="attribute">self.proof_of_concept = <span class="string">'Created a functional Proof of Concept using Apache infrastructures converting the current batch-based job scheduling system to a real-time streaming architecture that ran predictive algorithms and output live insights.'</span></p>
        <p class="attribute">self.presentations = <span class="string">'Presented weekly research PowerPoints to the entire FleetHub team.'</span></p>
        <p class="string">"""</p>
        
        
        <p><span class="keyword">class</span> CloudAutomationDevOpsCoOp_KimberlyClarkCorporation:</p>
        <p class="string">"""</p>
        <p class="date-comment"># May 2022 - Dec 2022</p>
        <p class="attribute">self.terraform_modules = <span class="string">'Wrote over a dozen Terraform modules enabling the automated deployment and maintenance of a variety of Azure resources, as well as allowing seamless integration into existing codebases.'</span></p>
        <p class="attribute">self.powershell_automation = <span class="string">'Developed a Powershell module that automates data export from hundreds of company repositories and imports received data to the GWS Database.'</span></p>
        <p class="attribute">self.terraform_provisioning = <span class="string">'Programmed a Terraform module to provision creation and upkeep for website monitors for over 600 Kimberly-Clark websites.'</span></p>
        <p class="attribute">self.webpage_design = <span class="string">'Designed a webpage using MudBlazor and .NET C# allowing a user to check the health of any given website and perform tasks such as a DNS DIG, Uptime checks, and SSL certificate checks.'</span></p>
        <p class="attribute">self.agile_experience = <span class="string">'Acquired valuable workplace experience with Agile Development and SOLID principles.'</span></p>
        <p class="string">"""</p>
        </div>
        `;
    } else if (tabName.toLowerCase() === 'projects') {
        contentArea.innerHTML = `
        <div id="project-section" class="code-block">
        <p class="comment"># Project Experience</p>
    
        <p><span class="keyword">class</span> SmartStadium_MachineLearningTeam:</p>
        <p class="string">"""</p>
        <p class="date-comment"># Jan 2023 - Present</p>
        <p class="attribute">self.team_lead = <span class="string"><img src="vip.png" alt="Andrew Gao" class="photo"/></span></p>
        <p class="attribute">self.data_cleaning = <span class="string">'Organized a team-wide data cleaning effort on thousands of video clips.'</span></p>
        <p class="attribute">self.hyperparameters = <span class="string">'Performed hyper-parameterization on the convolutional neural network model.'</span></p>
        <p class="attribute">self.incorrect_clips = <span class="string">'Investigated hundreds of incorrectly classified video clips to identify possible patterns, resulting in discovery of a critical error with video and play matching.'</span></p>
        <p class="attribute">self.research_paper = <span class="string">'Co-authored and submitted research paper to the 2023 IEEE PIMRC and 2024 Sloan Sports Conference.'</span></p>
        <p class="attribute">self.research_paper = <span class="project-link"><a href="https://gtvault.sharepoint.com/sites/VIP-VP3-Stadium-IoPT/Home/Machine%20Learning.aspx">Project Details</a></span></p>
        <p class="string">"""</p>
    
        <p><span class="keyword">class</span> Paravoid_VideoGameDesign_SoftwareTeamLead:</p>
        <p class="string">"""</p>
        <p class="date-comment"># Sep 2021 - Jan 2022</p>
        <p class="attribute">self.photo = <span class="string"><img src="paravoid.png" alt="Andrew Gao" class="photo"/></span></p>
        <p class="attribute">self.team_lead = <span class="string">'Lead, organize, and plan all software team meetings. '</span></p>
        <p class="attribute">self.communicate = <span class="string">'Communicated goals and priorities set by the project lead to over 20 other programmers.'</span></p>
        <p class="attribute">self.tasks = <span class="string">'Assign tasks to all team members and promote teamwork.'</span></p>
        <p class="attribute">self.teach = <span class="string">'Assist inexperienced members in learning the Unity API, C#, and Git.'</span></p>
        <p class="attribute">self.research_paper = <span class="project-link"><a href="https://www.gtvgdev.com/games-archive/paravoid">Project Details</a></span></p>
        <p class="string">"""</p>
        `;
        
    }

}

window.addEventListener('load', () => {
    changeTabContent('about');
});

function updateLineNumbers() {
    const content = document.getElementById('main-content');
    const lineNumbers = document.getElementById('line-numbers');
    const lines = content.innerText.split('\n');
    const lineHeight = parseInt(window.getComputedStyle(content).lineHeight);

    // Clear existing line numbers
    lineNumbers.innerHTML = '';

    // Add new line numbers based on the number of lines in the content
    lines.forEach((_, index) => {
        const lineNumberDiv = document.createElement('div');
        lineNumberDiv.className = 'line-number';
        lineNumberDiv.textContent = index + 1;
        lineNumberDiv.style.height = `${lineHeight}px`;
        lineNumbers.appendChild(lineNumberDiv);
    });
}

// Call initially to populate line numbers
document.addEventListener('DOMContentLoaded', updateLineNumbers);

// Observe for changes in the content and update line numbers accordingly
const observer = new MutationObserver(updateLineNumbers);
observer.observe(document.getElementById('main-content'), {
    childList: true,
    characterData: true,
    subtree: true
});