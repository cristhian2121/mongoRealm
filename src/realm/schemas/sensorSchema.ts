export const SensorSchema = {
    name: "Sensor",
    properties: {
      _id: "int",
      name: "string",
      status: "string",
      value: "int"
    },
    primaryKey: "_id",
};

export interface ISensor {
    _id: number;
    name: string;
    status: string;
    value: number
}