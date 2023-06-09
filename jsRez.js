var cssEntity = "txtJobEntity";
var cssEntityDetails = "txtJobEntityDetails";

//font-awesome classes
var _fa_map = "fa fa-map-marker";
var _fa_calendar = "fa fa-sharp fa-solid fa-calendar";
var _fa_envelope = "fa fa-envelope";
var _fa_globe = "fa fa-globe";
var _fa_phone = "fa fa-phone";
var _fa_linkedin = "fa fa-linkedin";
var _fa_entity = "fa fa-light fa-building";
var _fa_me = "fa fa-light fa-user";
var _fa_github = "fa fa-github";

//bootstrap classes
var _bs_colmd6 = "col-md-6";

$(document).ready(function () {
    //setup background
    loadBinary();
    //
    loadWorkExp();
    loadEducation();
    loadContact();
    loadSkills();
    loadCerts();
});

function loadBinary() {
    //
    var binary = '1';
    var binaryLength = 40000;
    //
    while (binary.length < binaryLength) { binary += (Math.floor(Math.random() * 10) % 2); }
    $('#binary').text(binary);
}

function loadWorkExp() {
    var work = JSON.parse(getDevExpJSON());
    var div = document.getElementById('devExp');
    var divMain = document.createElement('div');
    var txtMain = document.createElement('span');
    //
    txtMain.classList.add("txtHead");
    txtMain.innerText = "Experience";
    divMain.appendChild(txtMain); 
    //
    work.exp.forEach(function(job) {
        divMain.appendChild(generateDevExpJob(job));
    });
    //
    div.appendChild(divMain);
}

function generateDevExpJob(job) {
    var div = document.createElement('div');
    var spanTitle = document.createElement('span');
    // var spanEntity = document.createElement('span'); //moving entity down with loc time div
    //
    div.classList.add("expDiv");
    spanTitle.classList.add("expTitle");
    // spanEntity.classList.add("expEntity");
    //
    spanTitle.innerText = job.title;
    // spanEntity.innerText = job.entity;
    // spanTitle.prepend(elFA(_fa_me));
    // spanEntity.prepend(elFA(_fa_entity));
    //
    div.appendChild(spanTitle);
    // div.appendChild(spanEntity);
    //
    div.appendChild(generateLocTime(job.location, job.timeframe, job.entity));
    div.appendChild(generateDuties(job.duties, false));
    //
    return div;
}

function generateLocTime(loc, time, entity) {
    var div = document.createElement('div');
    var spanLoc = document.createElement('span');
    var spanTime = document.createElement('span');
    //
    div.classList.add("expLocTimeDiv");
    spanLoc.classList.add("expLocTime");
    spanTime.classList.add("expLocTime");
    spanLoc.innerText = loc;
    spanTime.innerText = time;
    //
    //~ moving entity span to this div
    var spanEntity = document.createElement('span');
    spanEntity.innerText = entity;
    spanEntity.classList.add("expLocTime");
    spanEntity.prepend(elFA(_fa_entity));
    div.appendChild(spanEntity);
    //
    //~ maybe too many fa icons
    spanLoc.prepend(elFA(_fa_map));
    spanTime.prepend(elFA(_fa_calendar));
    //
    div.appendChild(spanLoc);
    div.appendChild(spanTime);
    //
    return div;
}

function generateDuties(duties, detail) {
    var ul = document.createElement('ul');
    var liClass = (detail) ? "expDetails" : "expDuties";
    ul.style.listStyleType = (detail) ? "disc" : "square";
    //
    duties.forEach(function(duty) {
        var li = document.createElement('li');
        li.classList.add(liClass);
        li.innerText = (detail) ? duty : duty.duty;
        if (duty.details) { li.appendChild(generateDuties(duty.details, true)); }
        ul.appendChild(li);
    });
    //
    return ul;
}

function elFA(classes) {
    var i = document.createElement('i');
    i.classList = classes;
    return i;
}

function getDevExpJSON() {
    var json = '';
    //
    //~ adding more to details
    //
    json += '{"exp":[';
    json += '{"title":"Programmer Analyst 4",';
    json += '"entity":"WV Racing","location":"Charleston, WV","timeframe":"Nov 2021 - Present",';
    json += '"duties":[';
    json += '{"duty":"Refactored accounting algorithm from legacy audit application","details":[';
    json += '"Hyper-V p2v cloned WinXP production; v2p created test environment",';
    json += '"Refactored ObjectPAL to C# Models, SQL Database"]},';
    json += '{"duty":"Updated IRS electronic file generation process", "details":[';
    json += '"1099-MISC format change in 2022; process created in Alpha Anywhere"]}';
    json += ']},';
    //
    json += '{"title":"Programmer Analyst 3",';
    json += '"entity":"WV OIC","location":"Charleston, WV","timeframe":"Jun 2019 - Nov 2021",';
    json += '"duties":[';
    json += '{"duty":"Senior developer, Webmaster", "details":[';
    json += '"Contributor to agile development of case management systems (WPF, XAML)",';
    json += '"Collaborate with BA to create requirements; develop procedures (PL/SQL)",';
    json += '"Source control admin (TFS); backup DBA (Oracle); interview and train developers",';
    json += '"Restyled public site; collaborated with executive on requirements (CSS3)",';
    json += '"Developed public forms that utilize vendor web services (WSDL, SOAP)",';
    json += '"Developed intranet utility applications (Windows Authentication, MVC)"]}'
    json += ']},';
    //
    json += '{"title":"Programmer Analyst 1 - Programmer Analyst 2",';
    json += '"entity":"WV DHHR","location":"Charleston, WV","timeframe":"Jan 2015 - Nov 2016 - Jun 2019",';
    json += '"duties":[';
    json += '{"duty":"Senior SharePoint developer, Web developer", "details":[';
    json += '"Refactored legislation process for introducing new bills (SP Workflows)",';
    json += '"Developed out-of-scope functionality (SP Designer, JavaScript, DOM)",';
    json += '"Maintained intranet site (ColdFusion); refactored data layer (Access to SQL)",';
    json += '"Refactored interstate site IPACT (ColdFusion to C#, MVC, EF)",';
    json += '"Public form for child support (VB/ASP.Net); English & Spanish (RESX)"]}';
    json += ']},';
    //
    json += '{"title":"Database Manager - IT Manager",';
    json += '"entity":"Appalachian Tire","location":"Charleston, WV","timeframe":"Feb 2010 - Feb 2014 - Jan 2015",';
    json += '"duties":[';
    json += '{"duty":"Developed custom reports for business intelligence (VBA, VB.Net)"},'
    json += '{"duty":"Automated point-of-sale system processes (Reflection for UNIX, VBA)", "details":[';
    json += '"Daily sales review & close; end-of-month closing; end-of-year closing",';
    json += '"Inventory updates; import vendor invoice credits; correction requests"]}';
    json += ']},';
    //
    json += '{"title":"Data Entry Programmer",';
    json += '"entity":"Trenton Technology","location":"Utica, NY","timeframe":"Nov 2008 - Nov 2009",';
    json += '"duties":[';
    json += '{"duty":"Maintained legacy data collection applications (VB6)"},';
    json += '{"duty":"Developed management utility software (VB.Net, SQL)"}]}';
    //
    json += ']}';
    //
    return json;
}

// function getDevExpJSON() {
//     var json = '';
//     //
//     json += '{"exp":[';
//     // json += '{"title":"IT Manager (Programmer Analyst 4)","entity":"Racing Commission","location":"Charleston, WV","timeframe":"Nov 2021 - Present","details":[';
//     json += '{"title":"Programmer Analyst 4 (IT Manager)","entity":"WV Racing","location":"Charleston, WV","timeframe":"Nov 2021 - Present","details":[';
//     json += '"Refactored accounting algorithm from legacy audit application",';
//     json += '"Updated IRS electronic file generation process"]},';
//     //
//     // json += '{"title":"Programmer Analyst 3 / MOU Contract","entity":"Offices of the Insurance Commissioner","location":"Charleston, WV","timeframe":"Jun 2019 - Present","details":[';
//     json += '{"title":"Programmer Analyst 3","entity":"WV OIC","location":"Charleston, WV","timeframe":"Jun 2019 - Nov 2021","details":[';
//     json += '"Senior developer, Web master",';
//     json += '"Lead complex debugging and disaster recovery efforts",';
//     json += '"Exemplified and facilitated continuous learning"]},';
//     //
//     // json += '{"title":"Programmer Analyst 1 / 2","entity":"Department of Health and Human Resources","location":"Charleston, WV","timeframe":"Jan 2015 - Jun 2019","details":[';
//     json += '{"title":"Programmer Analyst 1 - Programmer Analyst 2","entity":"WV DHHR","location":"Charleston, WV","timeframe":"Jan 2015 - Nov 2016 - Jun 2019","details":[';
//     json += '"Designed and optimized data information systems",';
//     json += '"Head SharePoint developer"]},';
//     //
//     // json += '{"title":"IT Manager / Database Manager","entity":"Appalachian Tire","location":"Charleston, WV","timeframe":"Feb 2010 - Jan 2015","details":[';
//     json += '{"title":"Database Manager - IT Manager","entity":"Appalachian Tire","location":"Charleston, WV","timeframe":"Feb 2010 - Feb 2014 - Jan 2015","details":[';
//     json += '"Automated system processes",';
//     json += '"Developed reports for data analytics"]},';
//     //
//     json += '{"title":"Data Entry Programmer","entity":"Trenton Technology","location":"Utica, NY","timeframe":"Nov 2008 - Nov 2009","details":[';
//     json += '"Managed legacy data collection applications",';
//     json += '"Developed management utility software"]}';
//     //
//     json += ']}';
//     //
//     return json;
// }

function loadSkills() {
    var skills = JSON.parse(getSkillsJSON());
    var div = document.getElementById('skills');
    var divMain = document.createElement('div');
    var txtMain = document.createElement('span');
    //
    txtMain.classList.add("txtHead");
    txtMain.innerText = "Skills";
    divMain.appendChild(txtMain);
    //
    //~ changed to single skills list
    // skills.groups.forEach(function(group, ind, arr) { 
    //     divMain.appendChild(getSkillsGroup(group, ind, arr, true)); 
    // });
    //
    skills.skill.forEach(function(skill) { 
        divMain.appendChild(getSkill(skill)); 
    });
    //
    div.appendChild(divMain);
}

function getSkill(skill) {
    //~ single list (no group or subgroup or rating like below)
    //var div = document.createElement('div');
    var span = document.createElement('span');
    //
    span.classList.add("skillText");
    span.innerText = skill.text;
    //
    return span;
}

// function getSkillsGroup(group, ind, arr, parent) {
//     var div = document.createElement('div');
//     var span = document.createElement('span');
//     var divClass = parent ? "skillSubGroup" : "skillGroup";
//     var spanClass = divClass + "Span";
//     //
//     div.classList.add(divClass);
//     span.classList.add(spanClass);
//     if (ind == arr.length - 1 && parent) { div.classList.add("skillBottomBorder"); }
//     if (ind > 0 && !parent) { span.classList.add("skillTopBorder"); }
//     span.innerText = group.name;
//     div.appendChild(span); 
//     if (!parent) { div.appendChild(span); }
//     //
//     if (group.subGroups) { 
//         group.subGroups.forEach(function(sub, ind, arr) { 
//             div.appendChild(getSkillsGroup(sub, ind, arr, false)); 
//         }); 
//     }
//     //
//     if (group.list) { div.appendChild(getSkillsList(group.list)); }
//     //
//     return div;
// }

function getSkillsList(list) {
    var div = document.createElement('div');
    div.classList.add("skillSubGroup");
    //
    list.forEach(function(item) { 
        var row = document.createElement('div');
        var txt = document.createElement('span');
        //var bar = getSkillsRating(item.rating);
        //
        row.classList.add("skillListDiv");
        txt.classList.add("skillText");
        txt.innerText = item.text;
        row.appendChild(txt);
        //row.appendChild(bar);
        div.appendChild(row);
    });
    //
    return div;
}

function getSkillsRating(rate) {
    var div = document.createElement('div');
    var bar = document.createElement('div');
    //
    div.classList = "progress skillRatingDiv";
    bar.classList = "progress-bar skillRatingBar";
    bar.style.width = (parseInt(rate) * 20).toString() + "%";
    //
    div.appendChild(bar);
    return div;
}

function getSkillsJSON() {
    var json = '';
    //
    //~ changed to single list (no groups or subgroups or ratings like below)
    //
    json += '{"skill":[';
    json += '{"text":"HTML5"},';
    json += '{"text":"CSS3"},';
    json += '{"text":"BootStrap"},';
    json += '{"text":"JavaScript, DOM"},';
    json += '{"text":"jQuery, AJAX"},';
    json += '{"text":"C#, Java"},';
    json += '{"text":"MVC, Razor"},';
    json += '{"text":"EF, LINQ"},';
    json += '{"text":"WPF, XAML"},';
    json += '{"text":"VB6, VBA, VB.Net"},';
    json += '{"text":"ASP, ASP.Net"},';
    json += '{"text":"ColdFusion"},';
    json += '{"text":"SQL, PL/SQL"},';
    json += '{"text":"XML, JSON"},';
    json += '{"text":"WSDL, SOAP"},';
    json += '{"text":"SharePoint, DNN"},';
    json += '{"text":"TFS, GitHub"},';
    json += '{"text":"IIS, Apache2"},';
    json += '{"text":"LAMP"},';
    json += '{"text":"Hyper-V"},';
    json += '{"text":"Cloud"}';
    json += ']}';
    //
    return json;
}

// function getSkillsJSON() {
//     var json = '';
//     //
//     json += '{"groups":[';
//     json += '{"name":"Development","subGroups":[';
//     json += '{"name":"Front","list":[';
//     json += '{"text":"HTML, CSS, JS, DOM","rating":"4"},';
//     json += '{"text":"BS, jQuery, AJAX, Razor","rating":"3"}]},';
//     json += '{"name":"Back","list":[';
//     json += '{"text":"C#, MVC, LINQ","rating":"4"},';
//     json += '{"text":"Java, VB, ASP","rating":"3"}]},';
//     json += '{"name":"Data","list":[';
//     json += '{"text":"SQL, SSMS","rating":"4"},';
//     json += '{"text":"PL/SQL, Oracle","rating":"3"}]}]},';
//     json += '{"name":"Other","subGroups":[';
//     json += '{"name":"IT","list":[';
//     json += '{"text":"Hardware","rating":"4"},';
//     json += '{"text":"Networking, Cloud, VMs","rating":"3"}]},';
//     json += '{"name":"Soft","list":[';
//     json += '{"text":"Communication","rating":"4"},';
//     json += '{"text":"Critical Thinking","rating":"4"}]}]}]}';
//     //
//     return json;
// }

function loadContact() {
    var div = document.createElement('div');
    var span;
    //
    span = document.createElement('span');
    span.innerText = "linkedin.com/in/kelley-mcderment";
    span.prepend(elFA(_fa_linkedin));
    div.appendChild(span);
    //
    span = document.createElement('span');
    span.innerText = "kelley84@gmail.com";
    span.prepend(elFA(_fa_envelope));
    div.appendChild(span);
    //
    span = document.createElement('span');
    span.innerText = "github.com/Kelley84";
    span.prepend(elFA(_fa_github));
    div.appendChild(span);
    //
    span = document.createElement('span');
    span.innerText = "Charleston, WV";
    span.prepend(elFA(_fa_map));
    div.appendChild(span);
    //
    span = document.createElement('span');
    span.innerText = "304-444-5868";
    span.prepend(elFA(_fa_phone));
    div.appendChild(span);
    //

    //
    document.getElementById('contact').appendChild(div);
}

function loadEducation() {
    var div = document.createElement('div');
    var span = document.createElement('span');
    //
    span.classList.add("txtHead");
    span.innerText = "Education"
    div.appendChild(span);
    //
    span = document.createElement('span'); span.classList.add("eduTitle"); span.innerText = "Western Governors University"; div.appendChild(span);
    span = document.createElement('span'); span.classList.add("eduDetail"); span.innerText = "October 2022 - Present"; div.appendChild(span);
    span = document.createElement('span'); span.classList.add("eduDetail"); span.innerText = "B.S. in Software Engineering"; div.appendChild(span);
    span = document.createElement('span'); span.classList.add("eduDetail"); span.innerText = "Completed 60/122 units"; div.appendChild(span);
    span = document.createElement('span'); span.classList.add("eduDetail"); span.innerText = "Expected graduation: 9-2025"; div.appendChild(span);
    //
    document.getElementById('education').appendChild(div);
}

function loadCerts() {
    var div = document.createElement('div');
    var span = document.createElement('span');
    //
    span.classList.add("txtHead");
    span.innerText = "Certifications"
    div.appendChild(span);
    //
    span = document.createElement('span'); span.classList.add("eduTitle"); span.innerText = "ITIL 4 Foundations"; div.appendChild(span);
    span = document.createElement('span');span.classList.add("eduDetail"); span.innerText = "Cert # GR671494307KM"; div.appendChild(span);
    span = document.createElement('span');span.classList.add("eduDetail"); span.innerText = "Valid till Mar 2026"; span.style.fontStyle = "italic"; div.appendChild(span);
    div.appendChild(document.createElement('br'));
    //
    span = document.createElement('span'); span.classList.add("eduTitle"); span.innerText = "Microsoft Office Specialist"; div.appendChild(span);
    span = document.createElement('span');span.classList.add("eduDetail"); span.innerText = "PowerPoint, Word, Excel 2010"; div.appendChild(span);
    //div.appendChild(document.createElement('br'));
    //
    document.getElementById('certs').appendChild(div);
}