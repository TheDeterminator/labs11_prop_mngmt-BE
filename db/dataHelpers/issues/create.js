const db = require('../../dbConfig');

const create = async (req, res) => {
  try {
    const {
      date,
      name,
      notes,
      status,
      isVisit,
      organizationId,
      equipmentId
    } = req.body;

    const [issue] = await db('issues')
      .insert({
        date,
        name,
        notes,
        status,
        is_visit: isVisit,
        organization_id: organizationId
      })
      .returning('*');

    if (issue) {
      if (equipmentId) {
        var [equipmentJoinIssue] = await db('equipment_join_issues')
          .insert({
            equipment_id: equipmentId,
            issue_id: issue.id
          })
          .returning('*');
      }

      res.status(200).json({ issue, equipmentJoinIssue });
    } else {
      res.status(400).json({ error: 'You probably did a bad with your data.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = create;
