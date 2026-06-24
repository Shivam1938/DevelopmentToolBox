import BaseRepository from "./BaseRepository";
import Tool from "../models/Tools";

class ToolRepository extends BaseRepository{
    constructor() {
        super(Tool)
    }

    async findByName(name) {
      return await this.findOne({ name });
   }
}