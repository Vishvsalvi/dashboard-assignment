import { CreditCard, DollarSign, TrendingUp, Calendar } from 'lucide-react'
import { PageContainer, Section, SectionHeader, StatCard } from '../components/common'

const Payments = () => {
  return (
    <PageContainer>
      <div className="flex-1 space-y-6">
        {/* Payments Header */}
        <Section>
          <SectionHeader
            title="Payments & Earnings"
          >
            <div className="text-right">
              <p className="text-sm text-gray-600">Total Balance</p>
              <p className="text-2xl font-bold text-green-600">$2,847.50</p>
            </div>
          </SectionHeader>

          {/* Payment Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <StatCard
              icon={<DollarSign className="w-8 h-8" />}
              value="$847"
              label="This Month"
              bgColor="bg-green-50"
              iconColor="text-green-600"
            />
            <StatCard
              icon={<TrendingUp className="w-8 h-8" />}
              value="+12%"
              label="Growth"
              bgColor="bg-blue-50"
              iconColor="text-blue-600"
            />
            <StatCard
              icon={<CreditCard className="w-8 h-8" />}
              value="24"
              label="Transactions"
              bgColor="bg-purple-50"
              iconColor="text-purple-600"
            />
            <StatCard
              icon={<Calendar className="w-8 h-8" />}
              value="$1,200"
              label="Pending"
              bgColor="bg-orange-50"
              iconColor="text-orange-600"
            />
          </div>

          {/* Payment History */}
          <div className="space-y-4">
            <h2 className="text-xl text-gray-800 mb-4">Recent Transactions</h2>
            {[1, 2, 3, 4, 5].map((payment) => (
              <div key={payment} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Commission Payment #{payment}</h3>
                    <p className="text-sm text-gray-500">Received on Dec 15, 2024</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">+$150.00</p>
                  <p className="text-xs text-gray-500">Completed</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </PageContainer>
  )
}

export default Payments
