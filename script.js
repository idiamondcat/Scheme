function hoverElem(e) {
    $(e.target).children('.element__fill').css('fill', 'rgba(99, 182, 235, 0.2)').css('transition', 'all .7s ease');
    $(e.target).children('.st2').css('fill', '#63b6eb').css('transition', 'all 1s ease');
    let elemName = $(e.target).attr('elem-name');
    switch(elemName) {
        case 'os6': $('.elements-description--os6').show(); break;
        case 'kz': $('.elements-description--kz').show(); $('.kz-line').css('visibility', 'visible'); break;
        case 'kzn': $('.elements-description--kzn').show(); $('.kzn-line').css('visibility', 'visible'); break;
    }
}

function leaveElem(e) {
    $(e.target).children('.element__fill').css('fill', 'none').css('transition', 'all .7s ease');
    $(e.target).children('.st2').css('fill', '#efefef').css('transition', 'all 1s ease');
    $('.elements-description').hide();
    $('.st6').css('visibility', 'hidden');
}

function showLevel(e) {
    $('.water-level').removeClass('active-level');
    $(e.target).addClass('active-level');
    let lvl = $(e.target).text();
    switch(lvl) {
        case '0': $('.water').attr('height', '0').attr('y', '628').css('transition', 'all 3s ease'); break;
        case '1000': $('.water').attr('height', '200px').attr('y', '425').css('transition', 'all 3s ease'); break;
        case '2000': $('.water').attr('height', '400px').attr('y', '228').css('transition', 'all 3s ease'); break;
    }
}
