import { shallowMount, createLocalVue } from "@vue/test-utils";
import ErrorPage from '@/components/ErrorPage.vue';

describe('In ErrorPage Component', ()=> {
    let wrapper;

    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(ErrorPage, {
            propsData:{
                error : 'Some Error Occured!!',
            },
            localVue,
        });
    });

    afterEach( () => {
        wrapper.destroy();
    });

    it('is a vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });
    it('should render the correct html', () =>{
        expect(wrapper.html()).toContain('<div class="error-page">');
    });

    it('error rendered properly through prop data', () =>{
        expect(wrapper.props().error).toBe('Some Error Occured!!');
        expect(wrapper.find('h4').text()).toBe('Some Error Occured!!');
    });

    it('should call reload on reload button click', () =>{
        const { location } = window;
        delete window.location;
        window.location = { reload: jest.fn()};
        wrapper.find('#reloadBtn').trigger('click');
        expect(window.location.reload).toHaveBeenCalled();
        window.location = location;
    });
})