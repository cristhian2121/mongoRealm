import Realm from "realm";
import { ISensor, SensorSchema } from "./schemas/sensorSchema";

const realm = await Realm.open({
    path: "realm-files/myrealm",
    schema: [SensorSchema]
})

let sensor_1;
realm.write(() => {
    sensor_1 = realm.create<ISensor>("Sensor", {
        _id: 1,
        name: "First",
        status: "Active",
        value: 352
    })
})