import IRecipe from "../types/IRecipe";

function getObjectFromIndexedDB(callback: (data: IRecipe) => void) {
  const request = indexedDB.open("recipeDB", 1);

  request.onsuccess = function (event) {
    const db = (event.target as IDBOpenDBRequest).result;
    const transaction = db.transaction("recipes", "readonly");
    const store = transaction.objectStore("recipes");

    const objectRequest = store.get("recipe"); // Use the same key you stored with

    objectRequest.onsuccess = function () {
      const data = objectRequest.result;
      callback(data); // This should now return the correct object
    };

    objectRequest.onerror = function (event) {
      console.error("Error retrieving object:", event);
    };
  };

  request.onerror = function (event) {
    console.error("Error opening IndexedDB:", event);
  };
}

export default getObjectFromIndexedDB;