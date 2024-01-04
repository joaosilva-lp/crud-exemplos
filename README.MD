#Add Data to Cloud Firestone

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