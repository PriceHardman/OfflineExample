 var theData = Lawnchair('data',function(e){ //Create the data
          console.log('storage open');
     });

function doSave(input){						//Save the data with a timestamp
	var now = new Date().toLocaleString();
	var theEntry = {key:'test',value: input, timestamp: now};
	theData.save(theEntry);
	alert("Saved!");
}

function doGet(){							//Retrieve the data.
	theData.get('test',
		function(theSavedData){
			if(theSavedData) {
				console.log("Got the record!");
				document.getElementById('output').innerHTML = "You entered \""+theSavedData.value+"\" at "+theSavedData.timestamp+".";
			} else {
				alert("Didn't find any records");
			}
		}
		);
}

function destroy(){ //Empties the store.
	theData.nuke();
}
