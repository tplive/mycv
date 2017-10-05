var title = "Thomas Qvidahl";

$(function() {
    var source = $("#experience").html();
    var template = Handlebars.compile(source);
    var data = { experience : [
        {
            title : "Developer, Senior Consultant",
            employer : "EVRY Card Services AS",
            period : "Nov 2012 - Present",
            location : "Mo i Rana, Norway",
            summary : "<ul><li>I was hired as a DBA, and worked extensively with SQL and other Microsoft technologies.</li><li>Consulted on ITIL processes and DevOps approach as tools for effective software development and IT operations.</li><li>Studying at Nord university, I took a class in Android mobile development and that ignited a spark in me! When the opportunity arose, I took a chance on moving to software development, working in the Technology and Innovation department with an app prototype for our clients.</li></ul>"
        },
        {
            title : "Senior Consultant",
            employer : "iTet AS",
            period : "Nov 2002 - Nov 2012",
            location : "Mo i Rana, Norway",
            summary : "<ul><li>I was a trusted advisor for many SMB and Enterprise clients in the Helgeland area, working extensively on large deployments of Microsoft techologies such as SharePoint, Exchange SQL Server and Active Directory environments</li><li>Trained as Microsoft Certified Trainer (MCT), Microsoft Certified IT Professional (MCITP) and others.</li><li>I was the company goto-guy for matters concerning PKI and digital certificates.</li><li>Consistently Top 10 Consultant by revenue for many years. \"Employee of the Year\" in 2008</li><li>Mentored and coached colleagues and clients in technology and career choices.</li><li>ITIL Foundation certified since 2011</li></ul>"
        },
        {
            title : "Teacher",
            employer : "Høgskolen i Nesna",
            period : "Spring semester of 2009, 2011, 2013, 2014, 2015",
            location : "Mo i Rana, Norway",
            summary : "<ul><li>Hired to teach \"Operating Systems - Configuration and Use\" at Community College.</li><li>Mainly focusing on virtualization, networking Windows Server operating systems and interoperability with Linux in heterogeneous environments.</li><li>Received great feedback from students, as a committed, competent and ambitious teacher.</li><li>Adviced several students on career choice, and many have been employed as per my advice.</li></ul>"
        },
    ]};

    $("#experience-placeholder").html(template(data));

});