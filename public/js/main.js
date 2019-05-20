(function () {
    require(["Tone"], function (Tone) {
        //create a synth and connect it to the master output (your speakers)
        var synth = new Tone.Synth().toMaster();

        //Key variables
        // var key1 = document.getElementById("key-1");
        // var key1note = key1.innerHTML

        // key1.addEventListener('click', function() {
        //     synth.triggerAttackRelease(key1note, "8n")
        // });

        //Variables
        var grid = document.getElementById('grid');

        //Create Grid of Notes
        for (var i = 0; i < 16; i++) {
            var gridCol = document.createElement("div");
            grid.appendChild(gridCol);
            gridCol.setAttribute("id", `col${i}`);
            gridCol.setAttribute("class", `col`);

            for (var j = 0; j < 8; j++) {
                var gridCell = document.createElement('div');
                gridCol.appendChild(gridCell);
                gridCell.setAttribute("id", `col${i}cell${j}`);
                gridCell.setAttribute("class", `cell disarmed`);
            }
        }

        //Add note labels to the side of grid



        var playBtn = document.getElementById('play-btn');

        playBtn.addEventListener('click', function () {
            var bpm = 120;
            var seqCount = 0;
            //Loop through sequencer display green bar meaning col is being played
            var sequencerLoop = function () {
                col = document.getElementById(`col${seqCount}`);
                col.setAttribute('class', 'col col-played');

                setTimeout(function () {


                    // if (seqCount <= 15) {
                    //     nextCol = document.getElementById(`col${seqCount + 1}`);
                    //     nextCol.setAttribute('class', 'col col-played');
                    // }


                    col.setAttribute('class', 'col');


                    if (seqCount < 16) {
                        sequencerLoop();

                        for (var j = 0; j < 8; j++) {

                            var cell = document.getElementById(`col${seqCount}cell${j}`);

                            if (cell.getAttribute('class') === "cell armed" && cell.id === `col${seqCount}cell0`) {
                                synth.triggerAttackRelease("C5", "8n");
                            } else if (cell.getAttribute('class') === "cell armed" && cell.id === `col${seqCount}cell1`) {
                                synth.triggerAttackRelease("B4", "8n");
                            } else if (cell.getAttribute('class') === "cell armed" && cell.id === `col${seqCount}cell2`) {
                                synth.triggerAttackRelease("A4", "8n");
                            } else if (cell.getAttribute('class') === "cell armed" && cell.id === `col${seqCount}cell3`) {
                                synth.triggerAttackRelease("G4", "8n");
                            } else if (cell.getAttribute('class') === "cell armed" && cell.id === `col${seqCount}cell4`) {
                                synth.triggerAttackRelease("F4", "8n");
                            } else if (cell.getAttribute('class') === "cell armed" && cell.id === `col${seqCount}cell5`) {
                                synth.triggerAttackRelease("E4", "8n");
                            } else if (cell.getAttribute('class') === "cell armed" && cell.id === `col${seqCount}cell6`) {
                                synth.triggerAttackRelease("D4", "8n");
                            } else if (cell.getAttribute('class') === "cell armed" && cell.id === `col${seqCount}cell7`) {
                                synth.triggerAttackRelease("C4", "8n");
                            }
                        }
                        if (seqCount === 15) {
                            col.setAttribute('class', 'col');
                            sequencerLoop();
                        }

                    }

                    seqCount++;
                }, 500)
            }

            sequencerLoop();
        })



        //Check if any grid cells get clicked
        var armCells = function () {
            for (var i = 0; i < 16; i++) {
                for (var j = 0; j < 8; j++) {
                    gridCell = document.getElementById(`col${i}cell${j}`);

                    gridCell.addEventListener('click', function () {
                        if (this.getAttribute('class') === "cell disarmed") {
                            this.setAttribute('class', "cell armed");
                        } else {
                            this.setAttribute('class', "cell disarmed");
                        }

                    });
                }
            }
        }


        //play a middle 'C' for the duration of an 8th note
        // synth.triggerAttackRelease("C4", "8n");
        // synth.triggerAttackRelease("F4", "8n");
        armCells();
    });
})();