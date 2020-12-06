function ping() {
    $.getJSON("http://api.minetools.eu/ping/play.tundlor.net/25565", function(json){
        if(json.Players !== undefined) {
            if(json.Players > 0){
                $("#top-bar .server-status .prefix").html("Join ");
                $("#top-bar .server-status .online").html(json.Players + " Others ");
            }else{
                $("#top-bar .server-status .prefix").html("Play now ");
                $("#top-bar .server-status .online").html("");
            }
        } else {
            $("#top-bar .server-status .prefix").html("Play now ");
            $("#top-bar .server-status .online").html("");
        }

        $("#top-bar .server-status .prefix").html(json);
    });
}
