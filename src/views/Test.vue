<template>
  <div class="test">
    <Add @add-contact="addContact"/>
    <List 
      v-for="friend in friends"
      :key="friend.id"
      :name="friend.name"
      :phone="friend.phone"
      :email="friend.email"
    />
  </div>
</template>

<script>
import Add from '@/components/test/Add.vue'
import List from '@/components/test/List.vue'

export default {
  name: 'Home',
  components: {
    Add,
    List
  },
  data() {
    return {
      friends: [
        {
          id: 'red',
          name: 'erdenebayar',
          phone: 99662398,
          email: 'erdenebayarsh@ot.mn',
        }
      ]
    }
  },
  methods: {
    addContact (name, phone, email) {
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
      };
      this.friends.push(newFriendContact);
    }
  }
}
</script>
