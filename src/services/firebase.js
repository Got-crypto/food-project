import { firebase, FieldValue } from "../lib/firebase"

export async function getUserDetailsByUserId(customerId){
    const result = await firebase
        .firestore()
        .collection('customers')
        .where( 'customerId', '==', customerId)
        .get()

    return result.docs.map((item)=>({
        ...item.data(),
        docId: item.id
    }))

}

export async function addItemToShoppingCart( customerId, food ){
    const response = await getUserDetailsByUserId( customerId )
    const docId = response[0].docId
    
    return await firebase
    .firestore()
    .collection('customers')
    .doc(docId)
    .update({
        cart: FieldValue.arrayUnion( food )
    })
    
}

export async function deleteFoodFromUserShoppingCart( food, customerId ){
    
    const response = await getUserDetailsByUserId( customerId )
    const docId = response[0].docId

    return await firebase
        .firestore()
        .collection('customers')
        .doc(docId)
        .update({
            cart: FieldValue.arrayRemove(food)
        })
}