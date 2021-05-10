import {MedicalRecordService} from "../services/MedicalRecordService.js";
const { Controller } = WebCardinal.controllers;

export default class ExampleController extends Controller {

    constructor(...props) {
        super(...props);

        this.model = {
            records: [],
            'no-data': 'There are no medical records archived'
        };
    }
}
