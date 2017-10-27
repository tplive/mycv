
$(function() {
    // The data in JSON format
    var data = { experiences : [
        {
            title : "Developer, Senior Consultant",
            employer : "EVRY Card Services AS",
            period : "Nov 2012 - Present",
            location : "Mo i Rana, Norway",
            summary : "<ul><li>I was hired as a DBA, and worked extensively with SQL and other Microsoft technologies.</li><li>Consulted on ITIL processes and DevOps approach as tools for effective software development and IT operations.</li><li>Studying at Nord university, I took a class on Android mobile development. I was already falling in love with Java, and sparks flew! When the opportunity arose, I took the chance - moving to software development full-time! I'm currently working in the Technology and Innovation department on a native Android app prototype for our clients.</li><li>Experience with Java; Android SDK and Spring. Javascript; Node.js / Express and client-side with jQuery.</li></ul>"
        },
        {
            title : "Senior Consultant",
            employer : "iTet AS",
            period : "Nov 2002 - Nov 2012",
            location : "Mo i Rana, Norway",
            summary : "<ul><li>I was a trusted advisor for many SMB and Enterprise clients all over Norway, working extensively on large deployments of Microsoft techologies such as SharePoint, Exchange SQL Server and Active Directory environments</li><li>Trained as Microsoft Certified Trainer (MCT), Microsoft Certified IT Professional (MCITP) and others.</li><li>I was the company goto-guy for matters concerning PKI and digital certificates.</li><li>Consistently Top 10 Consultant by revenue for many years. \"Employee of the Year\" in 2008.</li><li>Mentored and coached colleagues and clients in technology and career choices.</li><li>ITIL Foundation certified since 2011</li></ul>"
        },
        {
            title : "Teacher",
            employer : "Høgskolen i Nesna",
            period : "Spring semester of 2009, 2011, 2013, 2014, 2015",
            location : "Mo i Rana, Norway",
            summary : "<ul><li>Hired to teach \"Operating Systems - Configuration and Use\" at Community College.</li><li>Mainly focusing on virtualization, networking Windows Server operating systems and interoperability with Linux in heterogeneous environments.</li><li>Received great feedback from students, as a committed, competent and ambitious teacher.</li><li>Adviced several students on career choice, and many have been employed as per my advice.</li></ul>"
        },
        {
            title : "Consultant",
            employer : "Telenor",
            period : "September 1995 - October 2002",
            location : "Trondheim, Norway",
            summary : "<ul><li>Started my IT-career after finishing vocational school (Computer technology, Stjørdal VGS).</li><li>I worked as a service technician with PC / Server / Storage / Network support.</li><li>In 1999 I joined the internal IT Operations department, responsible for keeping all of Telenor's server infrastructure running.</li><li>I was sponsored Microsoft MCSE and other technical certifications by my employer</li></ul>"
        }
    ]};

    var lang = { languages : [
        {
            language : "Norwegian",
            proficiency : 99
        },
        {
            language : "English",
            proficiency : 98
        },
        {
            language: "Java",
            proficiency : 70
        },
        {
            language : "HTML",
            proficiency : 90
        },
        {
            language : "Javascript",
            proficiency : 40
        },
        {
            language : "C#",
            proficiency : 30
        },
        {
            language : "PowerShell",
            proficiency : 95
        }
    ]};
    
    // Wiring the templates to data
    var source = $("#experiences").html();
    var template = Handlebars.compile(source);
    $("#experience-placeholder").html(template(data));

    var languagesource = $("#language-template").html();
    var langtemp = Handlebars.compile(languagesource);
    $("#language-placeholder").html(langtemp(lang));
});