const db = require('../config/db');

class Tag {
      constructor(){
            this.tagCollection = db.collection('tags');
      }
      
      async createTag(tagData){

            const newTag = {
                  ...tagData,
                  deleted: false,
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

            if(querySnapshot.empty) throw new Error('Tag not found!');

            return querySnapshot.docs[0].data();
      }
      
      async getAllTags(estateId){
            const tags = [];
            const querySnapshot = await this.tagCollection
                  .where('estateId', '==', estateId)
                  .where('deleted', '==', false)
                  .get();
            if(querySnapshot.empty) throw new Error('No Tags available!');
            
            querySnapshot.docs.map(tagDoc => {
                  const tagData = tagDoc.data();
                  tags.push({...tagData})
            });
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