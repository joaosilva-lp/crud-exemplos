##Add Data to Cloud Firestone:

1 - addDoc()
    we need to have:
    1 - Database Object - Where we want to add data to
    2 - Collection - where we want to add data to inside database
    3 - addDoc() - where we pass the colection and db references

    steps to follow:
    1 - Import Cloud Firestore
    2 - Initialize Firestore Database
    3 - Create addDoc() Query
    4 - Run addDoc() Query
    5 - Get Auto-generated ID

    Arguments:
    1 - collection()
    2- {} - data 


2 - setDoc()
    Add Data to Cloud Firestore - setDoc()
    1 - Database Object - where we want to add data to
    2 - doc() - where we pass db, collection name & custom ID
    3 - setDoc() - where we pass data along with doc() method

    Arguments:
    1 - doc()
        1 - database (db)
        2 - collection name (countries)
        3 - custom document ID (my.custom.id@gmail.com)
    
    2 - data {}




##UPDATE DATA TO CLOUD FIRESTORE:
1 - setDoc()
2 - updateDoc()

//Update Entire Document - setDoc()
1 - Database Object where we want to add data to
2 - doc() where we pass db, existing collection name & existing document ID
3 - setDoc() where we pass data along with doc() method


##UPDATE ONE OR MORE FIELDS:
##setDoc() - Arguments
1 - doc() - Arguments
    1 - database(db)
    2 - existing collection name (cities)
    3 - existing document ID (9GNz3ANhQAm0T6Wyj59H)
2 - data{}
3 - {merge:true}
    setDoc() - {merge:true}
    1 - When we do not specify an existing field name & value, it just ignores it.
    2 - When we try to update the same key-value pair that already exists, it also ignores it and does nothing.
    3 - When we want to change the value of any existing field name, just pass it with a new value inside the data object.
    4 - If we want a new field, we just write it!

