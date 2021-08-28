import firestore from '@react-native-firebase/firestore'

export let device_id = null
export let blocked_user = false

export const setDeviceId = (id) => {
    console.log(id)
    device_id = id
    checkIfBlockedUser(id)
}

export const block_user = () => {
    blocked_user = true
}

export const checkIfBlockedUser = async(device_id) => {
    await firestore()
        .collection('blocked_users')
        .where('device_id', '==', device_id)
        .get()
        .then((data) => {
            console.log('Blocked: '+ data.size)
            if (data.size > 0) {
                block_user()
            }
        })
        .catch((e) => console.log(e))
}