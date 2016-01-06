/**
 * Created by Shalom on 1/3/2016.
 */


angular.module( 'etGame.chals')

    .factory('ChalsFactory',function(){
        var challenges =[
            {
                id:'101'
            },
            {

                id:'102'
            },
            {

                id:'103'
            },
            {
                id:'104'
            }

        ];
        return {
            query: function () {
                return challenges;
            }


        };
    });