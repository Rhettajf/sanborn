//array of states I have sanborn maps for
var SanbornIndex = {
    AK: false,
    AL: false,
    AR: false,
    AZ: false,
    CA: false,
    CO: false,
    CT: false,
    DC: false,
    DE: false,
    FL: false,
    GA: false,
    HI: false,
    IA: false,
    ID: false,
    IL: false,
    IN: false,
    KS: false,
    KY: false,
    LA: false,
    MA: false,
    MD: false,
    ME: false,
    MI: false,
    MN: false,
    MO: false,
    MS: false,
    MT: false,
    NC: false,
    ND: false,
    NE: false,
    NH: false,
    NJ: false,
    NM: false,
    NV: false,
    NY: false,
    OH: false,
    OK: false,
    OR: false,
    PA: false,
    RI: false,
    SC: false,
    SD: false,
    TN: false,
    TX: true,
    UT: false,
    VA: false,
    VT: false,
    WA: false,
    WI: false,
    WV: false,
    WY: false,
    US: false
};
// OK lets create a map of sanborn maps
var myMap = drawStates("sanborn");
$.each(myMap.states, function (name, state) {
    //check if I have the map
	if (SanbornIndex[name]) {
		//highlight the states I have maps for
        state.attr("fill", "#F5BC31");
		//set the opacity for hover effect later
        state.attr("opacity", .5);
		// set cursor
		state.attr("cursor","pointer");
		//set click event to direct to url, use state abbrs
        this.click(function () {
			var url = 'states/' + name;
			window.open(url,"_self")
        });
		//hover event
        this.hover(function (event) {
            // set focus
			state.attr("opacity", 1);
			// generate a tooltip to show state name
            $('<div id="output"></div>').text(name)
                .appendTo('body')
                .css('top', (event.pageY - 10) + 'px')
                .css('left', (event.pageX + 20) + 'px')
                .fadeIn('slow');
        }, function () {
			//on mouse out reset opacity and remove tooltip
            state.attr("opacity", .5);
            $('#output').remove();
        }) 
			//make the tool tip follow the mouse 
		  .mousemove(function (event) {
            $('#output')
                .css('top', (event.pageY - 10) + 'px')
                .css('left', (event.pageX + 20) + 'px');
        });
    } else {
        //set opacity for inactive states
		state.attr("opacity", .5);
    }
});