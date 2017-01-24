var WSAjax = Class.create ({
    initialize: function (_url, _callback){
        this.url = _url ;
        this.callback = _callback ;
        this.connect () ;
    },
    connect: function (){
        var script_id = null;
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', this.url);
        script.setAttribute('id', 'xss_ajax_script');

        script_id = document.getElementById('xss_ajax_script');
        if(script_id){
            document.getElementsByTagName('head')[0].removeChild(script_id);
        }

        // Insert <script> into DOM
        document.getElementsByTagName('head')[0].appendChild(script);
    },
    process: function (data){
        this.callback(data) ;
    }

}) ;