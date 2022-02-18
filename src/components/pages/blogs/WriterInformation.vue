<template>
  <div>
    <section>
      <div class="mx-auto mt-20 w-8/12">
        <p class="border-b border-gray-300 pb-4 md:text-2xl xl:text-3xl">Writer Information</p>
        <div class="mt-5 mb-3 space-x-2 text-2xl">
          <span>
            <span>Show</span>
            <select class="bg-custom-darkcream mx-2">
              <option>50</option>
              <option>100</option>
              <option>150</option>
              <option>200</option>
            </select>
            <span>entries</span>
          </span>
          <input class="float-right inline px-2" />
          <span class="float-right">Search</span>
        </div>
        <!-- table start -->
        <table class="mt-5 w-full overflow-auto">
          <thead>
            <tr class="bg-custom-lightcream text-left">
              <th class="px-2">
                Display Order
                <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
              </th>
              <th>
                Writer Name
                <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
              </th>
              <th>
                Profile Image
                <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
              </th>
              <th>
                Email <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
              </th>
              <th>
                Register Date
                <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
              </th>
              <th>
                Status
                <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
              </th>
              <th class="text-center">
                Blog Count <i class="fas fa-sort-alt cursor-pointer pl-1 text-lg text-gray-300"></i>
              </th>
            </tr>
          </thead>
          <tbody
            v-for="(writer, i) in writer_info"
            :key="i"
            class="odd:bg-custom-lightcream hover:bg-custom-lightergreen"
          >
            <tr>
              <td class="px-2">
                <i
                  v-if="writer.active"
                  @click="writer.active = !writer.active"
                  class="fas fa-minus-circle mr-5 cursor-pointer text-red-400"
                ></i>
                <i
                  v-else
                  @click="writer.active = !writer.active"
                  class="fas fa-plus-circle text-custom-blue2 mr-5 cursor-pointer"
                ></i>
                {{ writer.display_order }}
              </td>
              <td>
                <p>{{ writer.name }}</p>
                <input class="mb-2 border px-2" type="text" :value="writer.role" />
              </td>
              <td>
                <img
                  v-if="writer.image.length > 0"
                  class="inline h-14 w-14 rounded-full"
                  :src="writer.image"
                  alt="writer-image"
                />
                <span v-else>Profile Picture</span>
                <i class="fas fa-cloud-upload ml-5 cursor-pointer text-2xl"></i>
              </td>
              <td>
                <a href="mailto: abc@example.com"
                  ><i class="fas fa-envelope text-custom-blue2 cursor-pointer text-3xl"></i
                ></a>
              </td>
              <td>{{ writer.register_date }}</td>
              <td>
                <label class="switch mr-2">
                  <input type="checkbox" id="togBtn" checked />
                  <div class="slider round"></div>
                </label>
                <button
                  class="bg-custom-blue2 hover:bg-custom-blue3 relative -top-2 -mt-2 rounded px-3 text-white"
                >
                  View
                </button>
              </td>
              <td class="text-center">0/10</td>
              <br />
            </tr>
            <tr v-if="writer.active === true">
              <td colspan="7">
                <span class="text-custom-blue3 mr-3 text-2xl font-bold">Bio</span>
                {{ writer.bio }}
              </td>
            </tr>
          </tbody>
        </table>
        <!-- table end -->
        <div class="my-8">
          <span>Showing <span> 1 </span> to <span> 44 </span> of <span> 44 </span>entries</span>
          <span class="float-right space-x-3 rounded border border-gray-300 px-3">
            <button class="w-14">Previous</button>
            <span class="bg-custom-blue1 inline-block w-10 cursor-text text-center text-white"
              >1</span
            >
            <button class="w-14">Next</button>
          </span>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      writer_info: [
        {
          display_order: 1,
          name: "Lori Webb",
          role: "Business Owner",
          image: "/assets/Lori-Picture.jpg",
          email: "mark@dvcsales.com",
          register_date: "6 January , 2022",
          bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure excepturi expedita omnis accusamus nostrum modi, alias repellat architecto autem aspernatur od Lorem",
          active: false,
        },
        {
          display_order: 2,
          name: "Mark Webb",
          role: "Business Owner",
          image: "/assets/Mark-Picture.png",
          email: "mark@dvcsales.com",
          register_date: "6 January , 2022",
          bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure excepturi expedita   ",
          active: false,
        },
        {
          display_order: 3,
          name: "Lori Webb",
          role: "",
          image: "",
          email: "mark@dvcsales.com",
          register_date: "6 January , 2022",
          bio: "Lorem omnis accusamus nostrum modi, alias repellat architecto autem aspernatur od Lorem",
          active: false,
        },
        {
          display_order: 4,
          name: "Mark Webb",
          role: "Business Owner",
          image: "/assets/Mark-Picture.png",
          email: "mark@dvcsales.com",
          register_date: "6 January , 2022",
          bio: "em omnis accusamus ",
          active: false,
        },
        {
          display_order: 5,
          name: "Lori Webb",
          role: "",
          image: "/assets/Lori-Picture.jpg",
          email: "mark@dvcsales.com",
          register_date: "6 January , 2022",
          bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure excepturi expedita omnis accusamus nostrum modi, Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure excepturi expedita omnis accusamus nostrum modi, ",
          active: false,
        },
      ],
    };
  },
};
</script>
<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 75px;
  height: 28px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ca2222;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2ab934;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(45px);
}

/*------ ADDED CSS ---------*/
.slider:after {
  content: "OFF";
  color: white;
  display: block;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  font-size: 12px;
  font-family: Verdana, sans-serif;
}

input:checked + .slider:after {
  content: "ON";
}

/*--------- END --------*/
</style>
