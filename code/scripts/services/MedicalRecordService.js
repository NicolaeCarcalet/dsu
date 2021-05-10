import DSUStorage from "/webcardinal/base/libs/DSUStorage.js";

export default class MedicalRecordService {

    constructor() {
        const HostBootScript = require("boot-host").HostBootScript;
        new HostBootScript("category-manager-service");
        this.DSUStorage = new DSUStorage();
    }

    addRecord(record, callback) {
        $$.interaction.startSwarmAs("test/agent/8", "medicalRecordsSwarm", "addRecord", record).onReturn(callback);
    }

    listRecords(callback) {
        $$.interaction.startSwarmAs("test/agent/8", "medicalRecordsSwarm", "listRecords").onReturn(callback);
    }
}