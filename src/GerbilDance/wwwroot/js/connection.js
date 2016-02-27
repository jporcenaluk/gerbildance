/// <reference path="jquery-2.2.1.min.js" />

$(document).ready(function () {
    $.post("http://dribbledance.apiblueprint.org/register", success(alert("hello")));
});