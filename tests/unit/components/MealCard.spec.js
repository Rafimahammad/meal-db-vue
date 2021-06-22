import { shallowMount, createLocalVue } from "@vue/test-utils";
import MealCard from '@/components/MealCard.vue'
import BootstrapVue from 'bootstrap-vue';

describe('In MealCard Component', () => {
    let wrapper;

    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(BootstrapVue);

        wrapper = shallowMount(MealCard, {
            localVue,
            propsData: {
                meal: {
                    strMeal: 'Choc Chip Pecan Pie',
                    strMealThumb: 'https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg',
                    strCategory: 'Dessert',
                    strArea: 'American',
                    idMeal: '52856',
                },
            },

            mocks: {
                $router:{
                    push: jest.fn(),
                },
            },
        });
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('is a vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    it('should render the correct markup', () => {
        expect(wrapper.html()).toContain('<div class="meal-card">');
    });

    it('should call getMealDetails on clicking Get Details button', () => {
        wrapper.find('#getMealDetailsBtn').trigger('click');
        const expectedRoute = {
          name: 'MealDetails',
          params: {
            id: '52856',
          },
        };
        expect(wrapper.vm.$router.push).toHaveBeenCalledWith(expectedRoute);
      });
});