import { Handbag, Download, Upload } from 'lucide-react'
import { PageContainer, Section, SectionHeader, Button, GridContainer } from '../components/common'

const Assets = () => {
  return (
    <PageContainer>
      <div className="flex-1 space-y-6">
        {/* Assets Header */}
        <Section>
          <SectionHeader
            title="My Assets"
          >
            <Button leftIcon={<Upload className="w-4 h-4" />}>
              Upload Asset
            </Button>
          </SectionHeader>

          {/* Assets Grid Placeholder */}
          <GridContainer>
            {[1, 2, 3, 4, 5, 6].map((asset) => (
              <div key={asset} className="border border-gray-200 rounded-xl p-4">
                <div className="w-full h-32 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                  <Handbag className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Asset {asset}</h3>
                <p className="text-gray-600 text-sm">Digital asset for marketing campaigns and promotions.</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-gray-500">PDF • 2.5 MB</span>
                  <button className="text-purple-600 hover:text-purple-800">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </GridContainer>
        </Section>
      </div>
    </PageContainer>
  )
}

export default Assets
