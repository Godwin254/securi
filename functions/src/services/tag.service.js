const db = require('../config/db');
const ResidentService = require('./resident.service');

class Tag {
      constructor(){
            this.residentService = new ResidentService();
            this.tagCollection = db.collection('tags');
      }
      
      async createTag(tagData){

            const newTag = {
                  ...tagData,
                  deleted: false,
                  assinged: true,
                  type: "tag",
                  createdAt: new Date().toDateString(),
            }
            const tagRef = await this.tagCollection.add(newTag);
            const tagDoc = await tagRef.get();
            
            return tagDoc.data();
      }

      async getTag(tagId){
            const querySnapshot = await this.tagCollection
                  .where('tagId', '==', tagId)
                  .where('deleted', '==', false)
                  .get();

            if(querySnapshot.empty) return "No tag found";//throw new Error('Tag not found!');

            const tagRef = querySnapshot.docs[0].data();
            const residentData = await this.residentService.getOneResident(tagRef.residentId);
            return {...tagRef, resident: `${residentData.firstname} ${residentData.lastname}`};
      }
      
      async getAllTags(estateId){
            const tags = [];
            const querySnapshot = await this.tagCollection
                  .where('estateId', '==', estateId)
                  .where('deleted', '==', false)
                  .get();
            if(querySnapshot.empty) throw new Error('No Tags available!');
            
            await Promise.all(
                  querySnapshot.docs.map(
                        async (tagDoc) => {
                              const tag = tagDoc.data();
                              const residentData = await this.residentService.getOneResident(tag.residentId);
                              const resident = residentData ? residentData : {};
                              const tagData = {
                                    ...tagDoc.data(),
                                    resident:  `${resident.firstname} ${resident.lastname}`,
                              }     
                              tags.push(tagData)
                        }
                  )
            )

            return tags;
            
      }
      
      async updateTag(tagId, tagData){

            const querySnapshot = await this.tagCollection
                  .where('id', '==', tagId)
                  .where('deleted', '==', false)
                  .get();
            
            if(querySnapshot.empty) throw new Error('Tag not found!');

            await querySnapshot.docs[0].ref.update(tagData);
      }
      
      async deleteTag(tagId){
            const querySnapshot = await this.tagCollection
                  .where('tagId', '==', tagId)
                  .where('deleted', '==', false)
                  .get();
            
            if(querySnapshot.empty) throw new Error('Tag not found!');
            await querySnapshot.docs[0].ref.update({deleted: true});
      }
}

module.exports = Tag;