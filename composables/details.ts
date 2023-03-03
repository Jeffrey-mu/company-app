import { ref } from 'vue'
import AppCardHeader from 'components/AppCardHeader.vue'
import AppInfoBox from 'components/AppInfoBox.vue'
import AppDescBox from 'components/AppDescBox.vue'
import Certifications from 'components/Certifications.vue'
import LocationBox from 'components/LocationBox.vue'
import Divider from 'components/Divider.vue'
import ChartBox from 'components/ChartBox.vue'
import ReviewerBox from 'components/ReviewerBox.vue'
import ClientsPortfolios from 'components/ClientsPortfolios.vue'
import CeoCard from 'components/CeoCard.vue'
export const companyData = ref({})
export const id = ref()
export const LAYOUT_DETAILS: any = ref([
  AppCardHeader,
  '<p><b>Overview</b></p>',
  AppInfoBox,
  AppDescBox,
  '<p><b>Certifications</b></p>',
  Certifications,
  LocationBox,
  Divider, 'ChartBox',
  {
    component_type: 'other',
    component: ChartBox,
    props: [
      { typeName: "Service Focus", type: "service_focus" },
      { typeName: "Client Focus", type: "client_focus" },
      { typeName: "Industries Focus", type: "industries_focus" }
    ]
  },
  `<p><b>Customer Reviews</b></p>
    <div class="reviewer-score"><span class="reviewer-star">★★★★★</span>&nbsp;<span>5.0&nbsp;(76 Reviews)</span></div>`,
  ReviewerBox,
  CeoCard,
  ClientsPortfolios
])
export async function useCompanyState() {
  const route = useRoute()
  id.value = route.params.id
  let temData = await import.meta.glob('/api/*.json')[`/api/${route.params.id}.json`]()
  companyData.value = temData.default
  return [companyData, LAYOUT_DETAILS]
}

