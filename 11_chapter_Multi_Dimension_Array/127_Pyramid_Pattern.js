
//I want Pyramid with 3 Rows
//So I am declaring variable n=3
//That means Row 1, Row 2, Row 3

let n = 3;

//Here I am creating outer loop for rows
//Here n=3 and i value will be incremented from 1 to 3
//So the outer loop will run 3 times

for(let i=1;i<=n;i++){

    //Here I am creating an empty string which will be used to store the spaces and stars for each row
            
    let row = "";

            //Here I am creating inner loop for spaces
            //Here n=3 and i value will be incremented from 1 to 3
            //So the inner loop will run 3 times for row 1, 2 times for row 2 and 1 time for row 3  
        
            for(let j=1;j<=n-i;j++){

            //Here I am adding space to the row string for each iteration of the inner loop
               
            row += " ";
        }
        //Here I am creating inner loop for stars
        //Here i value will be incremented from 1 to 3
        //So the inner loop will run 1 time for row 1, 3 times for row 2 and 5 times for row 3
        
        for(let j=1;j<=2*i-1;j++){

            //Here I am adding star to the row string for each iteration of the inner loop
            
            row = row + "*";
        }

        //Here I am printing the row string which contains spaces and stars for each row
        
        console.log(row);
}