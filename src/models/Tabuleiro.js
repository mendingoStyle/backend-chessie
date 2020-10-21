module.exports.freshGame = () => {
    let white_pawn = new Array();
    let black_pawn = new Array();
    

    for (let i = 1; i < 8; i++){
        white_pawn.push(
            new Object({
                coordinates: "B" + i,
                alive: 1,
            })
        );
        black_pawn.push(
            new Object({
                coordinates: "G" + (7-i),
                alive: 1,
            })
        );
    }
 
    const start = {
        white : {
            rooks : {
                right:{
                    coordinates: "01",
                    alive: 1,
                },
                left :{
                    coordinates: "08",
                    alive: 1,
                }
            },
            knights : {
                right:{
                    coordinates: "02",
                    alive: 1,
                },
                left : {
                    coordinates: "07",
                    alive: 1,
                }
            },
                       
            bishops : {
                left:{
                    coordinates: "03",
                    alive: 1,
                },
                right: {
                    coordinates: "06",
                    alive: 1,
                }
            },
            queen : {
                coordinates: "04",
                alive: 1,
            },
            king :{
                coordinates: "05",
                alive: 1,
            },
            white_pawn : pawn
        },
        black: {
            rooks: {
                right: {
                    coordinates: "71",
                    alive: 1,
                },
                left : {
                    coordinates: "78",
                    alive: 1,
                },
            },
            knights : {
                right: {
                    coordinates: "72",
                    alive: 1,
                },
                left: {
                    coordinates: "77",
                    alive: 1,
                }
            },
            bishops : {
                right:{
                    coordinates: "73",
                    alive: 1,
                },
                left : {
                    coordinates: "76",
                    alive2: 1,
                }
            },
            queen : {
                coordinates: "74",
                alive: 1,
            },
            king :  {
                coordinates: "75",
                alive: 1,
            },
            black_pawn : pawn
        }
    };




    //console.log(JSON.stringify(fresh_board));
    return JSON.stringify(start)
};

