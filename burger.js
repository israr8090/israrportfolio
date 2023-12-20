// let id1 = document.getElementById("id1");

function onClickMenu() {
    document.getElementById("bar1").classList.toggle("icon1")
    document.getElementById("bar2").classList.toggle("icon2")
    document.getElementById("bar3").classList.toggle("icon3")

    document.getElementById("id1").classList.toggle("sidebar-change")
    document.getElementById("home1").classList.toggle("home-change")
    document.getElementById("id2").classList.toggle("home-content-change")
}

function onClickMenu1() {
    document.getElementById("bar1").classList.toggle("icon1")
    document.getElementById("bar2").classList.toggle("icon2")
    document.getElementById("bar3").classList.toggle("icon3")

    document.getElementById("projectSidebar").classList.toggle("sidebar-change")
    document.getElementById("project-section").classList.toggle("project-change")
}

function onClickMenu2() {
    document.getElementById("bar1").classList.toggle("icon1")
    document.getElementById("bar2").classList.toggle("icon2")
    document.getElementById("bar3").classList.toggle("icon3")

    document.getElementById("sidebar-skill").classList.toggle("sidebar-change")
    document.getElementById("skill-section").classList.toggle("skill-change")
}
function onClickMenu3() {
    document.getElementById("bar1").classList.toggle("icon1")
    document.getElementById("bar2").classList.toggle("icon2")
    document.getElementById("bar3").classList.toggle("icon3")

    document.getElementById("sidebar-about").classList.toggle("sidebar-change")
    document.getElementById("about-section").classList.toggle("about-change")
}