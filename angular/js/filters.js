/**
 * Created by shariati on 10/10/2017.
 */
app.filter('myfilter', function(){
    //input: hamon date ke mikhaym filteresh konim
    //parametr haye badi option ha hastan
    return function (input, option1, option2) {
        var output;
        return output;
};
});

//example1

app.filter('ordinal', function(){

    return function (number) {
        //isNan: agar adade sahih ya float bod false bar migardone va agar string o aashari bod true barmigardone

        if(isNaN(number) || number < 1){
            return number;
        } else {
            var lastdigit = number % 10;
            if (lastdigit === 1) {
                return number + 'st';

            } else if (lastdigit === 2) {
                return number + 'nt';

            } else if (lastdigit === 3) {
                return number + 'rd';


            } else if (lastdigit > 3) {
                return number + 'td';
            }

        }

    }
});