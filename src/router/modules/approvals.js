import Layout from '@/layout'

export default {
  path: '/approvals',
  name: 'approvals',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/approvals'),
    meta: {
      title: '审批管理',
      icon: 'tree-table'
    }
  }]
}
