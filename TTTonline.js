three.classList.add("clickedColor");
six.classList.add("clickedColor");

function Vars() {
    numnq = [one, two, three, four, five, six, seven, eight, nine];
    numq = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    squaresStatus = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}

input.onclick = function Run() {     

    var a1, b1, c1, d1;

    Vars();
    
    for (i = 0; i < squaresStatus.length; i++) {
        document.getElementById(numq[i]).disabled = false;
        numnq[i].classList.remove("clickedColor");
        numnq[i].classList.remove("colorX");
    }
    whattodisable()
    input.classList.add("disappear"); input.disabled = true;
    for (i = 0; i < squaresStatus.length; i++) { numnq[i].classList.add("flip"); }  
    setTimeout(function () {
        one.value = ""; two.value = ""; three.value = ""; four.value = ""; five.value = "";
        six.value = ""; seven.value = ""; eight.value = ""; nine.value = "";
    }, 250)
    setTimeout(function () {
        document.getElementById("i_text").innerHTML = "I will start:";
        for (i = 0; i < squaresStatus.length; i++) { numnq[i].classList.remove("flip"); }
    }, 2000)
    setTimeout(function () {
        five.value = "X"; squaresStatus[4] = 1; five.style.color = "black"; five.style.backgroundColor = "gray"; document.getElementById("five").disabled = true;
    }, 3000)
    setTimeout(function () {
        document.getElementById("i_text").innerHTML = "Your turn. Click a field."; whattoenable()
        for (i = 0; i < squaresStatus.length; i++) { numnq[i].classList.add("hoverButton"); }
    }, 4000)
    one.onclick = function () { userClick(a1, 0, invoer1); }
    two.onclick = function () { userClick(a1, 1, invoer1); }
    three.onclick = function () { userClick(a1, 2, invoer1); }
    four.onclick = function () { userClick(a1, 3, invoer1); }    
    six.onclick = function () { userClick(a1, 5, invoer1); }
    seven.onclick = function () { userClick(a1, 6, invoer1); }
    eight.onclick = function () { userClick(a1, 7, invoer1); }
    nine.onclick = function () { userClick(a1, 8, invoer1); }
    function invoer1(a) {
        whattodisable(a);
        setTimeout(function () { document.getElementById("i_text").innerHTML = "Thank you."; }, 1000)
        setTimeout(function () { document.getElementById("i_text").innerHTML = "My turn:"; }, 2000)
        setTimeout(function () {
            if (a === 1) { four.value = "X"; squaresStatus[3] = 1; four.classList.add("colorX"); four.classList.remove("hoverButton"); document.getElementById("four").disabled = true; }
            else if (a === 2) { three.value = "X"; squaresStatus[2] = 1; three.classList.add("colorX"); three.classList.remove("hoverButton"); document.getElementById("three").disabled = true; }
            else if (a === 3) { two.value = "X"; squaresStatus[1] = 1; two.classList.add("colorX"); two.classList.remove("hoverButton"); document.getElementById("two").disabled = true; }
            else if (a === 4) { one.value = "X"; squaresStatus[0] = 1; one.classList.add("colorX"); one.classList.remove("hoverButton"); document.getElementById("one").disabled = true; }
            else if (a === 6) { nine.value = "X"; squaresStatus[8] = 1; nine.classList.add("colorX"); nine.classList.remove("hoverButton"); document.getElementById("nine").disabled = true; }
            else if (a === 7) { eight.value = "X"; squaresStatus[7] = 1; eight.classList.add("colorX"); eight.classList.remove("hoverButton"); document.getElementById("eight").disabled = true; }
            else if (a === 8) { seven.value = "X"; squaresStatus[6] = 1; seven.classList.add("colorX"); seven.classList.remove("hoverButton"); document.getElementById("seven").disabled = true; }
            else if (a === 9) { six.value = "X"; squaresStatus[5] = 1; six.classList.add("colorX"); six.classList.remove("hoverButton"); document.getElementById("six").disabled = true; }
        }, 3000)
        setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable(); }, 4000)
        one.onclick = function () { userClick(b1, 0, invoer2); }
        two.onclick = function () { userClick(b1, 1, invoer2); }
        three.onclick = function () { userClick(b1, 2, invoer2); }
        four.onclick = function () { userClick(b1, 3, invoer2); }        
        six.onclick = function () { userClick(b1, 5, invoer2); }
        seven.onclick = function () { userClick(b1, 6, invoer2); }
        eight.onclick = function () { userClick(b1, 7, invoer2); }
        nine.onclick = function () { userClick(b1, 8, invoer2); }
        function invoer2(b) {
            whattodisable();
            setTimeout(function () { document.getElementById("i_text").innerHTML = "My turn:"; }, 1000)
            if (a === 1 && b === 6) {
                setTimeout(function () { two.value = "X"; squaresStatus[1] = 1; two.classList.add("colorX"); two.classList.remove("hoverButton"); document.getElementById("two").disabled = true; }, 2000)
                setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable() }, 3000)
                three.onclick = function () { userClick(c1, 2, invoer3); }                
                four.onclick = function () { userClick(c1, 3, invoer3); }
                seven.onclick = function () { userClick(c1, 6, invoer3); }
                eight.onclick = function () { userClick(c1, 7, invoer3); }
                nine.onclick = function () { userClick(c1, 8, invoer3); }
                function invoer3(c) {
                    whattodisable()
                    if (c === 8) {                                                   
                        setTimeout(function () { document.getElementById("i_text").innerHTML = "My turn:"; }, 1000)
                        setTimeout(function () { three.value = "X"; squaresStatus[1] = 1; three.classList.add("colorX"); three.classList.remove("hoverButton"); document.getElementById("three").disabled = true; }, 2000)
                        setTimeout(function () {
                            document.getElementById("i_text").innerHTML = "Your turn.";
                            whattoenable();
                        }, 3000)                        
                        seven.onclick = function () { userClick(d1, 6, invoer4); }                        
                        nine.onclick = function () { userClick(d1, 8, invoer4); }
                        function invoer4(d) {
                            whattodisable();
                            if (d === 7) { draw(); }
                            else if (d === 9) { lose2(1); }
                        }
                    }
                    else { lose2(2); }
                }
            }
            else if (a === 3 && b === 8) {
                setTimeout(function () { six.value = "X"; squaresStatus[5] = 1; six.classList.add("colorX"); six.classList.remove("hoverButton"); document.getElementById("six").disabled = true; }, 2000)
                setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable(); }, 3000)
                one.onclick = function () { userClick(c1, 0, invoer3); }
                two.onclick = function () { userClick(c1, 1, invoer3); }               
                four.onclick = function () { userClick(c1, 3, invoer3); }              
                seven.onclick = function () { userClick(c1, 6, invoer3); }             
                nine.onclick = function () { userClick(c1, 8, invoer3); }
                function invoer3(c) {
                    whattodisable()
                    if (c === 4) {
                        setTimeout(function () { document.getElementById("i_text").innerHTML = "My turn:"; }, 1000)
                        setTimeout(function () { nine.value = "X"; squaresStatus[1] = 1; nine.classList.add("colorX"); nine.classList.remove("hoverButton"); document.getElementById("nine").disabled = true; }, 2000)
                        setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable(); }, 3000)                        
                        one.onclick = function () { userClick(d1, 0, invoer4); }                        
                        seven.onclick = function () { userClick(d1, 6, invoer4); }
                        function invoer4(d) {
                            whattodisable()
                            if (d === 1) { draw(); }
                            else if (d === 7) { lose2(5); }
                        }
                    }
                    else { lose2(8); }
                }
            }
            else if (a === 7 && b === 2) {
                setTimeout(function () { four.value = "X"; squaresStatus[3] = 1; four.classList.add("colorX"); four.classList.remove("hoverButton"); document.getElementById("four").disabled = true; }, 2000)
                setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable(); }, 3000)

                one.onclick = function () { userClick(c1, 0, invoer3); }                
                three.onclick = function () { userClick(c1, 2, invoer3); }              
                six.onclick = function () { userClick(c1, 5, invoer3); }                
                eight.onclick = function () { userClick(c1, 7, invoer3); }
                nine.onclick = function () { userClick(c1, 8, invoer3); }
                function invoer3(c) {
                    whattodisable()
                    if (c === 6) {
                        setTimeout(function () { document.getElementById("i_text").innerHTML = "My turn:"; }, 1000)
                        setTimeout(function () { one.value = "X"; squaresStatus[1] = 1; one.classList.add("colorX"); one.classList.remove("hoverButton"); document.getElementById("one").disabled = true; }, 2000)
                        setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable(); }, 3000)
                        three.onclick = function () { userClick(d1, 2, invoer4); }
                        nine.onclick = function () { userClick(d1, 8, invoer4); }
                        function invoer4(d) {
                            whattodisable()
                            if (d === 9) { draw(); }
                            else if (d === 3) { lose2(3); }
                        }
                    }
                    else { lose2(0); }
                }
            }
            else if (a === 9 && b === 4) {
                setTimeout(function () { eight.value = "X"; squaresStatus[7] = 1; eight.classList.add("colorX"); eight.classList.remove("hoverButton"); document.getElementById("eight").disabled = true; }, 2000)
                setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable(); }, 3000)
                one.onclick = function () { userClick(c1, 0, invoer3); }
                two.onclick = function () { userClick(c1, 1, invoer3); }
                three.onclick = function () { userClick(c1, 2, invoer3); }               
                six.onclick = function () { userClick(c1, 5, invoer3); }
                seven.onclick = function () { userClick(c1, 6, invoer3); }
                function invoer3(c) {
                    whattodisable()
                    if (c === 2) {
                        setTimeout(function () { document.getElementById("i_text").innerHTML = "My turn:"; }, 1000)
                        setTimeout(function () { seven.value = "X"; squaresStatus[1] = 1; seven.classList.add("colorX"); seven.classList.remove("hoverButton"); document.getElementById("seven").disabled = true; }, 2000)
                        setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable(); }, 3000)
                        one.onclick = function () { userClick(d1, 0, invoer4); }
                        seven.onclick = function () { userClick(d1, 6, invoer4); }
                        function invoer4(d) {
                            whattodisable()
                            if (d === 3) { draw(); }
                            else if (d === 1) { lose2(7); }
                        }
                    }
                    else { lose2(6); }
                }
            }
            else if (a === 2 && b === 7) {
                setTimeout(function () { six.value = "X"; squaresStatus[5] = 1; six.classList.add("colorX"); six.classList.remove("hoverButton"); document.getElementById("six").disabled = true; }, 2000)
                setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable(); }, 3000)
                one.onclick = function () { userClick(c1, 0, invoer3); }                
                three.onclick = function () { userClick(c1, 2, invoer3); }
                four.onclick = function () { userClick(c1, 3, invoer3); }                
                six.onclick = function () { userClick(c1, 5, invoer3); }               
                eight.onclick = function () { userClick(c1, 7, invoer3); }
                nine.onclick = function () { userClick(c1, 8, invoer3); }
                function invoer3(c) {
                    whattodisable()
                    if (c === 4) { lose2(c - 1); }
                    else if (c === 9) { lose2(c - 1); }
                    else { lose2(8); }
                }
            }
            else if (a === 4 && b === 9) {
                setTimeout(function () { two.value = "X"; squaresStatus[1] = 1; two.classList.add("colorX"); two.classList.remove("hoverButton"); document.getElementById("two").disabled = true; }, 2000)
                setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable(); }, 3000)
                one.onclick = function () { userClick(c1, 0, invoer3); }                
                three.onclick = function () { userClick(c1, 2, invoer3); }                                
                six.onclick = function () { userClick(c1, 5, invoer3); }
                seven.onclick = function () { userClick(c1, 6, invoer3); }
                eight.onclick = function () { userClick(c1, 7, invoer3); }
                function invoer3(c) {
                    whattodisable();
                    if (c === 3) { lose2(c - 1); }
                    else if (c === 8) { lose2(c - 1); }
                    else { lose2(2); }
                }
            }
            else if (a === 6 && b === 1) {
                setTimeout(function () { eight.value = "X"; squaresStatus[7] = 1; eight.classList.add("colorX"); eight.classList.remove("hoverButton"); document.getElementById("eight").disabled = true; }, 2000)
                setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable(); }, 3000)                
                two.onclick = function () { userClick(c1, 1, invoer3); }
                three.onclick = function () { userClick(c1, 2, invoer3); }
                four.onclick = function () { userClick(c1, 3, invoer3); }                               
                seven.onclick = function () { userClick(c1, 6, invoer3); }                
                nine.onclick = function () { userClick(c1, 8, invoer3); }
                function invoer3(c) {
                    whattodisable();
                    if (c === 2) { lose2(c - 1); }
                    else if (c === 7) { lose2(c - 1); }
                    else { lose2(6); }
                }
            }
            else if (a === 8 && b === 3) {
                setTimeout(function () { four.value = "X"; squaresStatus[3] = 1; four.classList.add("colorX"); four.classList.remove("hoverButton"); document.getElementById("four").disabled = true; }, 2000)
                setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable(); }, 3000)
                one.onclick = function () { userClick(c1, 0, invoer3); }
                two.onclick = function () { userClick(c1, 1, invoer3); }                               
                six.onclick = function () { userClick(c1, 5, invoer3); }
                seven.onclick = function () { userClick(c1, 6, invoer3); }                
                nine.onclick = function () { userClick(c1, 8, invoer3); }
                function invoer3(c) {
                    whattodisable()
                    if (c === 1) { lose2(c - 1); }
                    else if (c === 6) { lose2(c - 1); }
                    else { lose2(0); }
                }
            }
            else {
                if (one.value === "X") { lose(1 - 1); }
                else if (two.value === "X") { lose(2 - 1); }
                else if (three.value === "X") { lose(3 - 1); }
                else if (four.value === "X") { lose(4 - 1); }
                else if (six.value === "X") { lose(6 - 1); }
                else if (seven.value === "X") { lose(7 - 1); }                
                else if (eight.value === "X") { lose(8 - 1); }
                else if (nine.value === "X") { lose(9 - 1); }
            }
        }
    }

    function userClick(cc, whichNum, invoer) {
        cc = whichNum + 1, numnq[whichNum].value = "O"; squaresStatus[whichNum] = 1; numnq[whichNum].classList.add("clickedColor"); numnq[whichNum].classList.remove("hoverButton");
        document.getElementById(numq[whichNum]).disabled = true; invoer(cc);
    }

    function whattodisable() {
        for (i = 0; i < squaresStatus.length; i++) {
            if (document.getElementById(numq[i]).disabled === true) { squaresStatus[i] = 1; }
            if (document.getElementById(numq[i]).disabled === false) { document.getElementById(numq[i]).disabled = true; numnq[i].classList.remove("hoverButton"); }
        }
    }

    function whattoenable() {
        for (i = 0; i < squaresStatus.length; i++) {
            if (squaresStatus[i] !== 1) { document.getElementById(numq[i]).disabled = false; numnq[i].classList.add("hoverButton"); }
        }
    }

    function lose(loseNumber) {
        if (loseNumber < 4) { loseOpposite = 8 - loseNumber; }
        else if (loseNumber > 4) { loseOpposite = 8 - loseNumber; }
        setTimeout(function () { numnq[loseOpposite].value = "X"; squaresStatus[loseOpposite] = 1; numnq[loseOpposite].classList.add("colorX"); numnq[loseOpposite].classList.remove("hoverButton"); document.getElementById(numq[loseOpposite]).disabled = true; }, 2000)
        setTimeout(function () { document.getElementById("i_text").innerHTML = "You lose."; }, 3000)
        setTimeout(function () { input.classList.remove("vanish"); document.getElementById("input").value = "Try again?"; input.classList.add("appear"); }, 4000)
        setTimeout(function () { input.classList.remove("disappear", "appear"); input.disabled = false; }, 6000)
        input.onclick = function () { Run(); input.classList.add("disappear"); }

        //value for X = opposite - 1
    }

    function lose2(loseNumber) {
        if (loseNumber < 4) { loseOpposite = loseNumber + 5; }
        else if (loseNumber > 4) { loseOpposite = loseNumber - 5; }
        setTimeout(function () { document.getElementById("i_text").innerHTML = "My turn:"; }, 1000)
        setTimeout(function () { numnq[loseOpposite].value = "X"; squaresStatus[loseOpposite] = 1; numnq[loseOpposite].classList.add("colorX"); numnq[loseOpposite].classList.remove("hoverButton"); document.getElementById(numq[loseOpposite]).disabled = true; }, 2000)
        setTimeout(function () { document.getElementById("i_text").innerHTML = "You lose."; }, 3000)
        setTimeout(function () { input.classList.remove("vanish"); document.getElementById("input").value = "Try again?"; input.classList.add("appear"); }, 4000)
        setTimeout(function () { input.classList.remove("disappear", "appear"); input.disabled = false; }, 6000)
        input.onclick = function () { Run(); input.classList.add("disappear"); }

        //one = 5, two = 6, three = 7, four = 8, six = 0, seven = 1, eight = 2, nine = 3      
    }

    function draw() {
        setTimeout(function () { document.getElementById("i_text").innerHTML = "It's a draw."; }, 1000)
        setTimeout(function () { input.classList.remove("vanish"); document.getElementById("input").value = "Try again?"; input.classList.add("appear"); }, 2000)
        setTimeout(function () { input.classList.remove("disappear", "appear"); input.disabled = false; }, 4000)
        input.onclick = function () { Run(); input.classList.add("disappear"); }
    }
}