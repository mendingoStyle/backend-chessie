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
            rook : {
                coordinates1: "01",
                alive: 1,
                coordinates2: "08",
                alive2: 1,
            },
            knight : {
                coordinates1: "02",
                alive: 1,
                coordinates2: "07",
                alive2: 1,
            },
                       
            bishop : {
                coordinates1: "03",
                alive: 1,
                coordinates2: "06",
                alive2: 1,
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
            rook: {
                coordinates1: "71",
                alive: true,
                coordinates2: "78",
                alive2: true,
            },
            knight : {
                coordinates1: "72",
                alive: true,
                coordinates2: "77",
                alive2: true,
            },
            bishop : {
                coordinates1: "73",
                alive: true,
                coordinates2: "76",
                alive2: true,
            },
            queen : {
                coordinates: "74",
                alive: true,
            },
            king :  {
                coordinates: "75",
                alive: true,
            },
            black_pawn : pawn
        }
    };




    //console.log(JSON.stringify(fresh_board));
    return JSON.stringify(start)
};

