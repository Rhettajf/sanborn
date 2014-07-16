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
    GEORGIA: false,
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
    TEXAS: true,
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
        state.attr("fill", "#d3b74c");
		state.attr("fill-opacity", "0.5");
		//set the opacity for hover effect later
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
			state.attr("fill-opacity", "1");
			// generate a tooltip to show state name
            $('#output').text(name)
        }, function () {
			//on mouse out reset opacity and remove tooltip
            state.attr("fill-opacity", "0.5");
			$('#output').text("USA")
        }) 
    } else {
        //set opacity for inactive states
		state.attr("opacity", .5);
    }
});