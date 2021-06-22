import { shallowMount, createLocalVue } from "@vue/test-utils";
import About from '@/views/About.vue';

describe('In About Component', ()=>{
    let wrapper;

    beforeEach(() =>{
        const localVue = createLocalVue();
        wrapper = shallowMount(About, {
            localVue,
        });
    });

    afterEach(()=> {
        wrapper.destroy();
    });

    it('is a vue instance',() => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    it('should render the correct markup',()=>{
        expect(wrapper.html()).toContain('<div class="about">');
    });
});