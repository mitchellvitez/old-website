/*  Creates fading slideshow of items with class "symbol"
    By Mitchell Vitez. Feel free to use with attribution
*/
jQuery(function( $ ){
    (function() {
        var symbol = $(".symbol");
        var symbolIndex = 0;
        var oldSymbolIndex;
        var oldoldSymbolIndex;
        function showNextsymbol() {
            oldoldSymbolIndex = oldSymbolIndex;
            oldSymbolIndex = symbolIndex;
            do
                symbolIndex = Math.floor(Math.random() * (symbol.length - 0)) + 0;
            while (oldSymbolIndex == symbolIndex || oldoldSymbolIndex == symbolIndex);
            symbol.eq(symbolIndex % symbol.length)
            .fadeIn(500)
            .delay(2000)
            .fadeOut(500, showNextsymbol);
        }
        showNextsymbol();
    })(); 
});
